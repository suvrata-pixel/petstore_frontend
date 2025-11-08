import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import tph2 from "../assets/tph2.svg"; // your logo


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container">
        {/* Brand / Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={tph2}
            alt="PetStore Logo"
            width="90"
            height="90"
            className="me-3 rounded-circle"
          />
          <span className="my-logo-text fw-bold"> The Purr-chase Hub </span>
        </a>

        {/* Toggler button (for mobile) */}
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products and Services
              </a>
            </li>
            {/*<li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>*/}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
