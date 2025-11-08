import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <footer
      className="footer pt-5 pb-3 mt-5 text-light"
      style={{
        backgroundColor: "#2d2d2d",
      }}
    >
      <div className="container text-center text-md-start">
        {/* Follow Us Section */}
        <div className="text-center mb-4">
          <h5
            className="fw-bold"
            style={{
              color: "rgb(141, 104, 48)",
              fontFamily: '"Caveat Brush", cursive',
              fontSize: "1.8rem",
            }}
          >
            Follow Us On
          </h5>
          <div className="d-flex justify-content-center gap-4 mt-3">
            <a href="#" className="text-light fs-4 social-link">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-light fs-4 social-link">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="#" className="text-light fs-4 social-link">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="#" className="text-light fs-4 social-link">
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Footer Columns */}
        <div className="row text-center text-md-start mt-4">
          {/* About Us */}
          <div className="col-md-4 mb-4">
            <h6
              className="fw-bold mb-3"
              style={{
                color: "rgb(141, 104, 48)",
                fontFamily: '"Caveat Brush", cursive',
                fontSize: "1.6rem",
              }}
            >
              About Us
            </h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Pet Care and Tips */}
          <div className="col-md-4 mb-4">
            <h6
              className="fw-bold mb-3"
              style={{
                color: "rgb(141, 104, 48)",
                fontFamily: '"Caveat Brush", cursive',
                fontSize: "1.6rem",
              }}
            >
              Pet Care and Tips
            </h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Pet Care Tips</a></li>
              <li><a href="#">Nutrition Guides</a></li>
              <li><a href="#">Breed Info</a></li>
              <li><a href="#">Vet Corner</a></li>
              <li><a href="#">Pet Adoption</a></li>
            </ul>
          </div>

          {/* Care and Compassion */}
          <div className="col-md-4 mb-4">
            <h6
              className="fw-bold mb-3"
              style={{
                color: "rgb(141, 104, 48)",
                fontFamily: '"Caveat Brush", cursive',
                fontSize: "1.6rem",
              }}
            >
              Care and Compassion
            </h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Rescue and Rehabilitation</a></li>
              <li><a href="#">Donate for a Cause</a></li>
              <li><a href="#">Volunteer with Us</a></li>
              <li><a href="#">Community Stories</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary mt-4" />

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0" style={{ fontSize: "0.9rem", color: "#bbb" }}>
            © {new Date().getFullYear()} PetStore. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
