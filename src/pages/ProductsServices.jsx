// src/pages/ProductServices.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// IMPORT YOUR IMAGES AT THE TOP
import productCategoryImg from '../assets/product_category_pic.png'; // Correct path to your image
import serviceCategoryImg from '../assets/service_category.png'; // Correct path to your image

const ProductServices = () => {
  return (
    <div className="container py-5 text-center">
      <h2 className="section-heading mb-5 fw-bold">Explore Our Offerings</h2>

      <div className="row justify-content-center">
        {/* Card for navigating to Products */}
        <div className="col-md-5 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <img 
              src={productCategoryImg} // Use the imported variable here
              className="card-img-top" 
              alt="Shop Pet Products" 
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-bold">Shop Pet Products</h5>
              <p className="card-text text-muted">Discover our wide range of premium food, accessories, and health supplies for your pets.</p>
              <Link to="/products" className="btn custom-btn mt-auto">
                View Products
              </Link>
            </div>
          </div>
        </div>

        {/* Card for navigating to Services */}
        <div className="col-md-5 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <img 
              src={serviceCategoryImg} // Use the imported variable here
              className="card-img-top" 
              alt="Book Pet Services" 
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-bold">Book Pet Services</h5>
              <p className="card-text text-muted">Explore our professional grooming, veterinary check-ups, and training services.</p>
              <Link to="/services" className="btn custom-btn mt-auto">
                Book Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductServices;