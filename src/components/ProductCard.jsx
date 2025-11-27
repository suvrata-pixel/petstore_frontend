// src/components/ProductCard.jsx

import React from 'react';
// No need for a separate CSS file for now, Bootstrap classes are sufficient.
import {useCart} from "../context/CartContext";

const ProductCard = ({ item }) => {
  const {addToCart} = useCart();
  const isProduct = item.type === 'product';

  // --- Start of added code (NO + SIGNS) ---
  const handleAddToCart = () => {
    addToCart(item); // Call the context function with the current item
    alert(`${item.name} added to cart!`); // Simple alert for now
  };
  // --- End of added code ---
  
  return (
    <div className="col-lg-4 col-md-6 mb-4"> {/* Bootstrap column classes for responsive layout */}
      <div className="card h-100 shadow-sm border-0">
        <img 
          src={item.image} 
          className="card-img-top" 
          alt={item.name} 
          style={{ height: '200px', objectFit: 'cover' }} // Ensures images are uniform
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold text-truncate">{item.name}</h5>
          
          <p className="card-text text-muted small">{item.description}</p>
          
          <div className="mt-auto pt-3"> {/* Pushes content to the bottom */}
            <h4 className="card-price mb-2 text-primary">
              {isProduct ? `₹${item.price.toFixed(2)}` : `₹${item.price.toFixed(2)} / session`}
            </h4>
            
            <button
              className="btn btn-sm custom-btn w-100"
              onClick={handleAddToCart} // <--- This line is now clean
            > 
              {isProduct ? 'Add to Cart' : 'View Details / Book'}
            </button>
            
            {/* Optional Tag/Badge for visual distinction */}
            <span 
              className={`badge position-absolute top-0 end-0 m-2 ${isProduct ? 'bg-success' : 'bg-info'}`}
            >
              {isProduct ? 'Product' : 'Service'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;