import { useEffect, useState } from "react";
import {
  ICity,
  ICityItem,
  ICompany,
  IFilter,
  ILink,
} from "../types/interfaces";
import { HandbookService } from "../services/HandbookService";
import { useStore } from "./store";

export function useCompanies(
  page: number,
  service_ids?: number[],
  city?: ICityItem,
  search?: string
) {
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [pagesCount, setPagesCount] = useState<number>(1);

  let queryParams = "";

  queryParams += service_ids
    ?.map((id) => `handbook_security_service_type_ids[]=${id}`)
    .join("&");

  if (city && city.id) {
    city.type == "city"
      ? (queryParams += "&handbook_city_id=" + city.id)
      : (queryParams += "&handbook_region_id=" + city.id);
  }

  if (search) {
    queryParams += "&search=" + search;
  }

  useEffect(() => {
    HandbookService.fetchCompanies(queryParams, page)
      .then((resp) => {
        setCompanies(resp.data.data.map((company:ICompany)=>({...company, reviews: company.reviews.filter(e=>e) })));
        setPagesCount(resp.data.meta.last_page);
      })
      .catch((error) => console.log(error));
  }, [service_ids, city, search, page]);
  return { companies, pagesCount };
}

export function useCities() {
  const [cities, setCities] = useState<ICity[]>([]);

  const setStateCities = useStore(state=>state.setCities) 

  useEffect(() => {
    HandbookService.fetchCities()
      .then((resp) => {
        setCities(resp.data.data)
        setStateCities(resp.data.data)
      })
      .catch((error) => console.log(error));
  }, []);
  return cities;
}
export function useFilters() {
  const [filters, setFilters] = useState<IFilter[]>([]);

  useEffect(() => {
    HandbookService.fetchFilters().then(resp=>setFilters(resp.data.data))
  }, []);
  return filters;
}
