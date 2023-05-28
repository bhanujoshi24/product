import React, { useState } from "react";
import axios from "axios";

export const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    type: "",
    place: "",
    warranty: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveProduct = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/addProduct",
        product
      );

      console.log("Product added successfully:", response.data);
      // Reset the form after successful product addition
      setProduct({
        name: "",
        type: "",
        place: "",
        warranty: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    placeholder="Name"
                    name="name"
                    className="form-control"
                    value={product.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Type:</label>
                  <input
                    placeholder="Type"
                    name="type"
                    className="form-control"
                    value={product.type}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Place:</label>
                  <input
                    placeholder="Place"
                    name="place"
                    className="form-control"
                    value={product.place}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Warranty:</label>
                  <input
                    placeholder="Warranty"
                    name="warranty"
                    className="form-control"
                    value={product.warranty}
                    onChange={handleInputChange}
                  />
                </div>

                <button className="btn btn-success" onClick={saveProduct}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    // Reset the form when cancel button is clicked
                    setProduct({
                      name: "",
                      type: "",
                      place: "",
                      warranty: "",
                    });
                  }}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
