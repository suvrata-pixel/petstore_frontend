import React from "react";
import "./Hero.css"; // we'll add custom styles here


const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container text-light">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold"> Every Purr-chase is a Pawsitive choice 🐾 </h1>
            <p className="custom_tag1 lead mb-5">
              Premium food, grooming, and medical care — everything your furry
              friend deserves, all in one place.
            </p>
            <button className="btn custom-btn btn-lg mt-4">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
