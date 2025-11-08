import React from "react";
import "./RescueAndCare.css";
import bgImage from "../assets/rescue-bg1.png"; // adjust path if needed

const RescueAndCare = () => {
  return (
    <div
      className="rescue-section text-light py-5"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="rescue-title mb-3">Rescue & Care</h2> <br></br>
            <p className="rescue-text mb-4">
              Our community is dedicated to supporting local shelters and
              independent rescuers. Your direct donation helps cover emergency
              medical care, food, and fostering supplies for stray cats and dogs
              in our area.
            </p> <br></br>
            <button className="custom-btn fw-bold px-4 py-2 shadow-sm">
              Donate ❤️
            </button>
          </div>

          <div className="col-md-6 text-center text-md-end mt-4 mt-md-0">
            <h1 className="display-5 fw-bold rescue-caption">
              Every purchase <br /> helps a stray 🐾
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RescueAndCare;
