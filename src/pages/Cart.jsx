// src/pages/Cart.jsx

import React from 'react';
import { useCart } from '../context/CartContext'; // Import our custom hook
import { Link } from 'react-router-dom'; // For "Continue Shopping" link

// Assuming you'll eventually use the Indian Rupee symbol
const rupeeSymbol = '₹';

const Cart = () => {
  // Now also pulling the updated clearCart function
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  // Calculate Subtotal (This was already perfect)
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // ---------------------------------------------------------------------------------
  // 💡 Handlers for quantity changes and removal (Logic was already perfect)
  // We keep these defined here to keep the rendering logic clean
  const handleQuantityChange = (id, delta) => {
    const itemInCart = cartItems.find(item => item.id === id);
    if (itemInCart) {
      const newQuantity = itemInCart.quantity + delta;
      // This logic delegates removal to the context if quantity hits 0
      if (newQuantity <= 0) {
        removeFromCart(id);
      } else {
        updateQuantity(id, newQuantity);
      }
    }
  };

  const handleRemoveItem = (id) => {
    // ⚠️ IMPORTANT: We should implement a custom confirmation modal here later,
    // as the project rules forbid the use of browser `alert()` or `confirm()`.
    // For now, we'll connect it directly.
    removeFromCart(id);
  };
  // ---------------------------------------------------------------------------------


  return (
    <div className="container py-5">
      <h2 className="section-heading">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        // Display if cart is empty
        <div className="text-center p-5 border rounded shadow-sm">
          <p className="lead">Your cart is currently empty. Go find some pawsome stuff!</p>
          <Link to="/products" className="btn custom-btn mt-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        // Display if cart has items
        <>
          <div className="row">
            {/* Cart Items List */}
            <div className="col-lg-8">
              {cartItems.map(item => (
                <div key={item.id} className="card mb-3 shadow-sm">
                  <div className="row g-0 align-items-center">
                    <div className="col-md-3">
                      <img
                        src={item.image}
                        className="img-fluid rounded-start"
                        alt={item.name}
                        style={{ height: '100px', objectFit: 'cover', width: '100%' }}
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="card-body py-2">
                        <h5 className="card-title mb-1">{item.name}</h5>
                        <p className="card-text text-muted small mb-2">
                          {item.description.substring(0, 70)}...
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="mb-0 fw-bold">
                            Total: {rupeeSymbol}{(item.price * item.quantity).toFixed(2)}
                          </p>

                          {/* -------------------------------------------------------------- */}
                          {/* 💡 The FIX: Connecting the Buttons to the Handlers */}
                          {/* -------------------------------------------------------------- */}
                          <div className="d-flex align-items-center">
                            {/* Quantity Decrement Button */}
                            <button
                              className="btn btn-outline-secondary btn-sm me-2"
                              onClick={() => handleQuantityChange(item.id, -1)}
                              aria-label="Decrease quantity"
                            >
                              <i className="bi bi-dash"></i>
                            </button>

                            <span className="mx-1 fw-bold" style={{ minWidth: '20px', textAlign: 'center' }}>
                              {item.quantity}
                            </span>

                            {/* Quantity Increment Button */}
                            <button
                              className="btn btn-outline-secondary btn-sm ms-2"
                              onClick={() => handleQuantityChange(item.id, 1)}
                              aria-label="Increase quantity"
                            >
                              <i className="bi bi-plus"></i>
                            </button>

                            {/* Remove Button */}
                            <button
                              className="btn btn-danger btn-sm ms-3"
                              onClick={() => handleRemoveItem(item.id)}
                              aria-label={`Remove ${item.name}`}
                            >
                              <i className="bi bi-trash"></i> Remove
                            </button>
                          </div>
                          {/* -------------------------------------------------------------- */}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="col-lg-4">
              <div className="card shadow-sm border-0 sticky-top" style={{ top: '100px' }}>
                <div className="card-body">
                  <h4 className="card-title mb-4">Order Summary</h4>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span className="fw-bold">{rupeeSymbol}{subtotal.toFixed(2)}</span>
                  </div>
                  {/* You can add shipping/tax/discount lines here later */}
                  <hr />
                  <div className="d-flex justify-content-between fw-bold mb-3 text-success h5">
                    <span>Total Payable:</span>
                    <span>{rupeeSymbol}{subtotal.toFixed(2)}</span>
                  </div>
                  {/*<button className="btn custom-btn w-100">
                    <i className="bi bi-check-circle me-2"></i> Proceed to Checkout
                  </button>*/}

                  <Link
                    to="/checkout-success"
                    className="btn custom-btn w-100"
                    style={{ padding: "14px" }}
                  >
                  <i className="bi bi-check-circle me-2"></i>
                  Complete Purchase
                  </Link>

                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
             <Link to="/products" className="btn btn-outline-secondary">
                <i className="bi bi-arrow-left me-2"></i> Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;