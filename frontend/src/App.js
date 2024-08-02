import React, { useEffect, useState } from "react";
import "./App.css";
import apiService from "./api/apiService";

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  // GET products request example
  const fetchProducts = async () => {
    try {
      const { data } = await apiService.getProducts();
      // Handle the response data
      console.log(data);
      setProducts(data);
    } catch (error) {
      // Error handling is already done in the interceptor,
      // but you can add component-specific error handling here
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // POST request example
  const addProduct = async () => {
    try {
      const newProduct = {
        title: "New Product",
        price: 10,
        description: "A description",
        categoryId: 1,
        images: ["https://placeimg.com/640/480/any"],
      };
      const { data } = await apiService.createProduct(newProduct);
      // Handle the response data
      console.log(data);
      // setProducts(data);
    } catch (error) {
      // Error handling is already done in the interceptor,
      // but you can add component-specific error handling here
      console.error("Error adding product:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    // Here we can render Shimmer UI or Skeleton UI
    console.log("loading data...");
    return <></>;
  }

  return (
    <div className="App">
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
