// src/pages/ProductDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:4000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.isActive === false) {
          navigate("/products");
        } else {
          setProduct(data);
          setLoading(false);
        }
      })
      .catch(() => navigate("/products"));
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    addToCart(product, quantity);
    alert(`${quantity} × ${product.name} added to cart!`);
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-success" style={{ width: "4rem", height: "4rem" }}></div>
      </div>
    );
  }

  if (!product) return <h2 className="text-center py-5">Product not found</h2>;

  return (
    <div className="container py-5" style={{ paddingTop: "100px" }}>
      <div className="row g-5">
        {/* Image */}
        <div className="col-lg-6">
          <img
            src={product.image || "https://via.placeholder.com/600x600/f8d7da/333?text=No+Image"}
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "600px", objectFit: "cover" }}
          />
        </div>

        {/* Details */}
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold mb-3">{product.name}</h1>
          <p className="text-muted fs-4 mb-4">Category: <strong>{product.category}</strong></p>
          <p className="lead mb-4">{product.description}</p>

          <div className="bg-light p-4 rounded mb-4">
            <h2 className="text-success fw-bold">₹{product.price}</h2>
          </div>

          {/* Quantity */}
          <div className="d-flex align-items-center mb-4">
            <button
              className="btn btn-outline-secondary me-3"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              −
            </button>
            <span className="fs-3 mx-3">{quantity}</span>
            <button
              className="btn btn-outline-secondary ms-3"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            className="custom-btn btn-lg px-5 py-3 w-100"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          <div className="mt-4">
            <button className="btn btn-link text-decoration-none" onClick={() => navigate(-1)}>
              ← Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;