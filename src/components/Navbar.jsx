// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import tph2 from "../assets/tph2.svg";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";   // ← NEW: Import cart

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();
  const { cartItems } = useCart();               // ← NEW: Get cart items
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();            // clears user + cart + prevents back button
    navigate("/login");
  };

  // Helper to calculate total items in cart
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top shadow-sm"
      style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={tph2}
            alt="PetStore Logo"
            width="90"
            height="90"
            className="me-3 rounded-circle"
          />
          <span className="my-logo-text fw-bold">The Purr-chase Hub</span>
        </Link>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-2">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products-services-hub">
                Products & Services
              </Link>
            </li>

            {/* CART WITH BADGE */}
            <li className="nav-item position-relative">
              <Link className="nav-link d-flex align-items-center" to="/cart">
                Cart
                {totalCartCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: '0.65rem' }}
                  >
                    {totalCartCount}
                    <span className="visually-hidden">items in cart</span>
                  </span>
                )}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>

            {/* USER LOGGED IN */}
            {user ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  style={{ color: '#4D805A', fontWeight: '600' }}
                >
                  Hi, {user.username.split("@")[0]}!
                </a>
                <ul className="dropdown-menu dropdown-menu-end shadow">
                  {isAdmin && (
                    <li>
                      <Link className="dropdown-item" to="/admin">
                        Admin Dashboard
                      </Link>
                    </li>
                  )}
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              /* USER NOT LOGGED IN */
              <li className="nav-item">
                <Link to="/login">
                  <button className="custom-btn ms-3">Login</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;