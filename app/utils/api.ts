import axios from "axios";
import { headers } from "next/dist/client/components/headers";

axios.defaults.baseURL = "https://api.kupiya.kz/api/v1";

class Api {
  async fetchCompanies() {
    const response = await axios.get("/security-services", {
      params: {
        per_page: 15,
        page: 1,
      },
    });
    return response.data;
  }
  async fetchFilters() {
    const response = await axios.get("/handbooks", {
      params: {
        handbook: "security-services",
      },
    });
    return response.data;
  }
}

export default new Api();
