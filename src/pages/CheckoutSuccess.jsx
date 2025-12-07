// src/pages/CheckoutSuccess.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CheckoutSuccess = () => {
  const { clearCart } = useCart();

  // Clear the cart when page loads (just like real payment)
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container py-5" style={{ paddingTop: "100px", minHeight: "70vh" }}>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="text-center py-5">
            {/* Success Icon */}
            <div className="mb-4">
              <i className="bi bi-check-circle-fill text-success" style={{ fontSize: "5rem" }}></i>
            </div>

            <h1 className="display-4 fw-bold text-success mb-3">
              Payment Successful!
            </h1>
            <p className="lead fs-3 text-muted mb-4">
              Thank you for shopping with <strong>The Purr-chase Hub</strong> 🐾
            </p>
            <p className="fs-5 text-muted">
              Your order has been confirmed and will be delivered soon.
            </p>

            {/* Buttons */}
            <div className="mt-5">
              <Link to="/products" className="btn custom-btn btn-lg px-5 me-3">
                Continue Shopping
              </Link>
              <Link to="/" className="btn btn-outline-secondary btn-lg px-5">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;