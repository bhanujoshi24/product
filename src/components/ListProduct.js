import React, { useState, useEffect } from "react";
import axios from "axios";

export const ListProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getAllProduct");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (product) => {
    try {
      const response = await axios.delete(
        "http://localhost:8080/deleteProduct",
        { data: product }
      );
      console.log("Product deleted:", response.data);
      fetchProducts();
      // Perform any necessary actions after successful deletion
    } catch (error) {
      console.error("Error deleting product:", error);
      // Handle the error appropriately
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center">Product List</h2>
        <div className="row"></div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Name</th>
                <th> Type</th>
                <th> Place</th>
                <th> Warranty</th>
                <th>Delete Product</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td> {product.name} </td>
                  <td> {product.type}</td>
                  <td> {product.place}</td>
                  <td> {product.warranty}</td>
                  <td>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => deleteProduct(product)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
