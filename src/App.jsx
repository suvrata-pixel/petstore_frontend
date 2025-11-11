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


const App = () => {
  return (
    <>
      <Navbar />   {/* 👈 Common Navbar for all pages */}

      {/*<div style={{ paddingTop: '90px' }}>*/}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products-services-hub" element={<ProductsServices />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<h1 style={{ textAlign: 'center', padding: '50px' }}>404 - Page Not Found</h1>} />
      </Routes>
      {/*</div>*/}
      <Footer />   {/* 👈 Common Footer for all pages */}
    </>
  );
};

export default App;

