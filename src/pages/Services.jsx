// src/pages/Services.jsx

import React from 'react';
import ProductCard from '../components/ProductCard'; 
import { productsAndServicesData } from '../data/sampleData'; // Import the mock data

const Services = () => {
  // Filter the data to show only items with type === 'service'
  const services = productsAndServicesData.filter(item => item.type === 'service');

  return (
    <div className="container py-5">
      <h2 className="section-heading text-center mb-5 fw-bold">Our Professional Pet Services</h2>
      <div className="row justify-content-center">
        {services.map(service => (
          <ProductCard key={service.id} item={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;