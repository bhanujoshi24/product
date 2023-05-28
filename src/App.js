import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ListProduct } from "./components/ListProduct";
import { Header } from "./components/Header";
import { AddProduct } from "./components/AddProduct";
import { FilterProduct } from "./components/FilterProduct";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ListProduct />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product-list" element={<ListProduct />} />
          <Route path="/filter-product-list" element={<FilterProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
