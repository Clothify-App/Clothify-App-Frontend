import React from "react";
import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPage";
import AboutPage from "../Pages/AboutPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ProductsPage from "../Pages/ProductsPage";
import Dashboard from "../components/Dashboard/Dashboard";
import CartPage from "../Pages/CartPage";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/Private/PrivateRoute";
import Image from "../Image";
import ProductPage from "../Pages/ProductPage";
import Invoice from "./Payments/InvoicePage";
import Cancel from "./Payments/Cancel";
import NoMatch from "./NoMatch/NoMatch";

function Navigations() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/image" element={<Image />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/cancel" element={<Cancel />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default Navigations;
