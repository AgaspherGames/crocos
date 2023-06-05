import axios from "axios";
import { ICityItem } from "../types/interfaces";
import http from "../utils/http";

async function fetchCompanies(params: string, page: number = 1) {
  const response = await http.get("/security-services?" + params, {
    params: {
      per_page: 15,
      page,
    },
  });
  return response;
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
  const response = await http.get("/handbooks?handbook=security-services", {
    headers,
  });
  return response;
}

export const HandbookService = {
  fetchCompanies,
  fetchCities,
  fetchFilters
};


