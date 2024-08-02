import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { handleError } from "../utils/helper";

// 1. Axios Setup
const axiosInstance = axios.create({ baseURL: BASE_URL });

// 2. Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any request headers here
    config.headers["Content-Type"] = "application/json";
    // We can add authentication token here if required
    // config.headers['Authorization'] = `Bearer ${getToken()}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// 2. Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => handleError(error)
);

export default axiosInstance;
