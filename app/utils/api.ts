import axios from "axios";
import { headers } from "next/dist/client/components/headers";
import { ICity, ICityItem } from "../types/interfaces";

axios.defaults.baseURL = "https://api.kupiya.kz/api/v1";

class Api {
  async fetchCompanies(service_ids?: number[], city?: ICityItem, search?: string) {
    let queryParams = service_ids
      ?.map((id) => `handbook_security_service_type_ids[]=${id}`)
      .join("&");
      if (city){
        city?.type=='city'
        ?
        queryParams+= '&handbook_city_id='+city.id
        :
        queryParams+= '&handbook_region_id='+city.id
      }
      if (search){
        queryParams+= '&search='+search
      }
    const response = await axios.get("/security-services?" + queryParams, {
      params: {
        per_page: 15,
        page: 1,
      },
    });
    return response.data;
  }
  async fetchFilters() {
    const headers = {
      accept: "application/json, text/plain, */*",
      "accept-language": "ru",
    };
    const response = await axios.get("/handbooks", {
      params: {
        handbook: "security-services",
      },
      headers,
    });
    return response.data;
  }
  async fetchRegions() {
    const headers = {
      accept: "application/json, text/plain, */*",
      "accept-language": "ru",
    };
    const response = await axios.get("/handbooks", {
      params: {
        handbook: "regions",
      },
      headers,
    });
    return response.data;
  }
  async fetchCities() {
    const headers = {
      accept: "application/json, text/plain, */*",
      "accept-language": "ru",
    };
    const response = await axios.get<Promise<{ data: ICity[] }>>("/handbooks", {
      params: {
        handbook: "cities",
      },
      headers,
    });

    return response.data;
  }
}

export default new Api();
