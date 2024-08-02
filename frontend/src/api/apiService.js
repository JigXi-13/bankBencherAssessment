import { API_ENDPOINTS } from "../utils/constants";
import axiosInstance from "./axiosInstance";

// 3. API Service
const apiService = {
  get: (url, config = {}) => axiosInstance.get(url, config),
  post: (url, data, config = {}) => axiosInstance.post(url, data, config),
  put: (url, data, config = {}) => axiosInstance.put(url, data, config),

  // Specific API methods
  getProducts: () => apiService.get(API_ENDPOINTS.GET_PRODUCTS),
  getProductById: (id) =>
    apiService.get(`${API_ENDPOINTS.GET_SINGLE_PRODUCT}/${id}`),
  createProduct: (data) => apiService.post(API_ENDPOINTS.CREATE_PRODUCT, data),
  updateProduct: (id, data) =>
    apiService.put(`${API_ENDPOINTS.UPDATE_PRODUCT}/${id}`, data),
};

export default apiService;
