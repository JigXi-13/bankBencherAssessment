# BankBencher Assessment

# React API Service Layer

This project implements a robust service layer for handling API requests in a React application. It uses Axios for HTTP requests and includes interceptors, error handling, and modular organization of API-related code.

## Project Structure
src/
├── api/
│   ├── apiService.js
│   └── axiosInstance.js
├── utils/
│   ├── constants.js
│   └── helper.js
└── ...

## Features

- Centralized API service layer
- Axios instance with interceptors
- Error handling with status code mapping
- Modular and reusable code structure
- Constants for API endpoints and base URL

## File Descriptions

### 1. `src/api/apiService.js`

This file contains the main API service methods. It provides a clean interface for making API calls throughout the application.

Key features:
- Generic methods for GET, POST, and PUT requests
- Specific methods for product-related API calls
- Uses the Axios instance for all requests

### 2. `src/api/axiosInstance.js`

Sets up the Axios instance with interceptors for requests and responses.

Key features:
- Creates an Axios instance with a base URL
- Implements request interceptor for setting headers
- Implements response interceptor for centralized error handling

### 3. `src/utils/constants.js`

Defines constants used throughout the API service layer.

Key features:
- Defines the base URL for API requests
- Contains API endpoints as constants
- Includes an error map for different HTTP status codes

### 4. `src/utils/helper.js`

Contains utility functions, primarily for error handling.

Key features:
- Centralized error handling function
- Uses the error map from constants to handle different error scenarios

## Usage

To use this API service layer in your React components:

```javascript
import apiService from '../api/apiService';

// Example: Fetching products
const fetchProducts = async () => {
  try {
    const response = await apiService.getProducts();
    console.log(response.data);
  } catch (error) {
    // Error is already logged by the error handler
    // Add any component-specific error handling here
  }
};

// Example: Creating a product
const createProduct = async (productData) => {
  try {
    const response = await apiService.createProduct(productData);
    console.log('Product created:', response.data);
  } catch (error) {
    // Error is already logged by the error handler
    // Add any component-specific error handling here
  }
};
