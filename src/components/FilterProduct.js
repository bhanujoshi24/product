import React, { useState } from "react";
import axios from "axios";

export const FilterProduct = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [place, setPlace] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const getProductByName = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/getProductByName/${name}`
      );
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Error filtering products by name:", error);
    }
  };

  const getProductWithText = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/getProductWithText/${text}`
      );
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Error filtering products with text:", error);
    }
  };

  const getProductByPlace = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/getProductByPlace/${place}`
      );
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Error filtering products by place:", error);
    }
  };

  const getProductOutOfWarranty = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/getProductOutOfWarrenty"
      );
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Error filtering products out of warranty:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Filter Products</h2>
      <div className="row">
        <div className="col-md-4 ">
          <div className="form-group">
            <label htmlFor="name">Filter by Name:</label>
            <input
              type="text"
              className="form-control  mb-3"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <button
            className="btn btn-primary col-md-4 mb-3"
            onClick={getProductByName}
          >
            Filter by Name
          </button>
        </div>
        <div className="col-md-4">
          <div className="form-group  mb-3">
            <label htmlFor="text">Filter by Text:</label>
            <input
              type="text"
              className="form-control"
              id="text"
              value={text}
              onChange={handleTextChange}
            />
          </div>
          <button
            className="btn btn-primary col-md-4  mb-3"
            onClick={getProductWithText}
          >
            Filter by Text
          </button>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="place">Filter by Place:</label>
            <input
              type="text"
              className="form-control  mb-3"
              id="place"
              value={place}
              onChange={handlePlaceChange}
            />
          </div>
          <button className="btn btn-primary" onClick={getProductByPlace}>
            Filter by Place
          </button>
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary" onClick={getProductOutOfWarranty}>
            Filter Out of Warranty
          </button>
        </div>
      </div>
      <br />
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Place</th>
              <th>Warranty</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.type}</td>
                <td>{product.place}</td>
                <td>{product.warranty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
