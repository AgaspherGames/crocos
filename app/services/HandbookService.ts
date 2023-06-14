import axios from "axios";
import { ICityItem } from "../types/interfaces";
import http from "../utils/http";

async function fetchCompanies(params: string, page: number = 1) {
  return http.get("/security-services?" + params, {
    params: {
      per_page: 15,
      page,
    },
  });
}
async function fetchCities(lang: string = "ru") {
  const headers = {
    "accept-language": lang,
  };
  const response = await http.get("/handbooks?handbook=cities", {
    headers,
  });
  return response;
}
async function fetchFilters(lang: string = "ru") {
  const headers = {
    "accept-language": lang,
  };
  return http.get("/handbooks?handbook=security-services", {
    headers,
  });
}
async function fetchCompanyService(id: number | string, lang: string = "ru") {
  const headers = {
    "accept-language": lang,
  };
  return http.get(`/security-services/${id}`, {
    headers,
  });
}

export const HandbookService = {
  fetchCompanies,
  fetchCities,
  fetchFilters,
  fetchCompanyService,
};
