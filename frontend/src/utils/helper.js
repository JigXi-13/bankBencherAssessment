import { errorMap } from "./constants";

// Centralized error handling function using error map
export const handleError = (error) => {
  if (error.response) {
    const handle = errorMap[error.response.status] || errorMap.default;
    handle(error);
  } else if (error.request) {
    console.error("No response received:", error.message);
  } else {
    console.error("Error setting up request:", error.message);
  }
  return Promise.reject(error);
};
