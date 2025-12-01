import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductsServices from "./pages/ProductsServices";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>          {/* ← AuthProvider OUTSIDE */}
      <CartProvider>        {/* ← CartProvider INSIDE */}
        <Navbar />

        {/*<div style={{ paddingTop: "90px" }}>*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products-services-hub" element={<ProductsServices />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<h1 style={{ textAlign: "center", padding: "100px" }}>404</h1>} />
          </Routes>
        {/*</div>*/}

        <Footer />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;