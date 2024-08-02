export const BASE_URL = "https://api.escuelajs.co/api/v1";

export const API_ENDPOINTS = {
  GET_PRODUCTS: "/products",
  GET_SINGLE_PRODUCT: "/products/:id",
  CREATE_PRODUCT: "/products",
  UPDATE_PRODUCT: "/products/:id",
  // Add other endpoints as needed
};

// Error map with status codes and corresponding handling logic
// More status code can be added here...
export const errorMap = {
  400: (error) =>
    console.error(
      "Bad Request:",
      error.response.data.message || "Invalid request."
    ),
  401: (error) => {
    console.error(
      "Unauthorized:",
      error.response.data.message || "Please log in."
    );
    // Optional: Redirect to login
    // window.location.href = "/login";
  },
  403: (error) =>
    console.error(
      "Forbidden:",
      error.response.data.message || "You do not have permission."
    ),
  404: (error) =>
    console.error(
      "Not Found:",
      error.response.data.message || "Resource not found."
    ),
  500: (error) =>
    console.error(
      "Internal Server Error:",
      error.response.data.message || "Something went wrong on the server."
    ),
  default: (error) =>
    console.error(`Unexpected error: ${error.response.status}`),
};
