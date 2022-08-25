import React from "react";
import AddProduct from "./components/AddProduct";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DisplayProduct from "./components/DisplayProduct";
import UpdateProduct from "./components/UpdateProduct";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/add" element={<AddProduct />} />
        <Route exact path="/products" element={<DisplayProduct />} />
        <Route exact path="/updateProduct" element={<UpdateProduct />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
