import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Product Management App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/add-product" className="nav-link">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product-list" className="nav-link">
                  Product List
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/filter-product-list" className="nav-link">
                  Filtered Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
