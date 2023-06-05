import axios from "axios";

const BASE_URL = "https://api.kupiya.kz/";
// const BASE_URL = "https://pms-backend-dev.crocos.kz/";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}api/v1`,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosInstance;