import { useEffect, useState } from "react";
import { ICity, ICityItem, ICompany, IFilter, ILink } from "../types/interfaces";
import { HandbookService } from "../services/HandbookService";

export function useCompanies(
    page: number,
  service_ids?: number[],
  city?: ICityItem,
  search?: string,
) {
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);
  let queryParams= '';
  queryParams += service_ids
    ?.map((id) => `handbook_security_service_type_ids[]=${id}`)
    .join("&");
  if (city&&city.id) {
    city.type == "city"
      ? (queryParams += "&handbook_city_id=" + city.id)
      : (queryParams += "&handbook_region_id=" + city.id);
  }
  if (search) {
    queryParams += "&search=" + search;
  }

  useEffect(() => {
    (async () => {
        const resp = await HandbookService.fetchCompanies(queryParams, page)
      setCompanies(resp.data.data);
      setPageCount(resp.data.meta.last_page)
      
    })();
  }, [service_ids, city, search, page]);
  return {companies, pageCount};
}

export function useCities() {
  const [cities, setCities] = useState<ICity[]>([]);
  useEffect(() => {
    (async () => {
      const citiesResp = (await HandbookService.fetchCities()).data.data;
      setCities(citiesResp);
    })();
  }, []);
  return cities;
}
export function useFilters() {
  const [filters, setFilters] = useState<IFilter[]>([]);
  useEffect(() => {
    (async () => {
      const filtersResp = (await HandbookService.fetchFilters()).data.data;
      setFilters(filtersResp)
    })();
  }, []);
  return filters;
}

// let queryParams = service_ids
//       ?.map((id) => `handbook_security_service_type_ids[]=${id}`)
//       .join("&");
//       if (city){
//         city?.type=='city'
//         ?
//         queryParams+= '&handbook_city_id='+city.id
//         :
//         queryParams+= '&handbook_region_id='+city.id
//       }
//       if (search){
//         queryParams+= '&search='+search
//       }
//     const response = await axios.get("/security-services?" + queryParams, {
//       params: {
//         per_page: 15,
//         page: 1,
//       },
//     });
//     return response.data;
