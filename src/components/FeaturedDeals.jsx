import React from "react";
import "../index.css"; // optional, for global styles
import deal1 from "../assets/deal1.png";
import deal2 from "../assets/deal2.png";
import deal3 from "../assets/deal3.png";
import deal4 from "../assets/deal4.png";

const FeaturedDeals = () => {
  return (
    <div className="container my-5">
      {/* Section Heading */}
      <h2 className="section-heading">
        Featured Deals 🐾
      </h2>

      {/* Bootstrap Carousel */}
      <div id="featuredDealsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Carousel Item 1 */}
          <div className="carousel-item active">
            <div className="d-flex justify-content-center gap-4">
              <div className="card" style={{ width: "16rem" }}>
                <img src={deal1} className="card-img-top" alt="Deal 1" />
                <div className="card-body text-center">
                  <h5 className="card-title">Premium Cat Food</h5>
                  <p className="card-text">Save 20% on WhiskerCare Cat Meals!</p>
                  <button className="custom-btn">Shop Now</button>
                </div>
              </div>

              <div className="card" style={{ width: "16rem" }}>
                <img src={deal2} className="card-img-top" alt="Deal 2" />
                <div className="card-body text-center">
                  <h5 className="card-title">Healthy Dog Treats</h5> 
                  <p className="card-text">Buy 1 Get 1 Free on BarkBites!</p> <br></br>
                  <button className="custom-btn">Shop Now</button>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Item 2 */}
          <div className="carousel-item">
            <div className="d-flex justify-content-center gap-4">
              <div className="card" style={{ width: "16rem" }}>
                <img src={deal3} className="card-img-top" alt="Deal 3" />
                <div className="card-body text-center">
                  <h5 className="card-title">Pet Grooming Kit</h5>
                  <p className="card-text">Flat 25% off this week only!</p> <br></br>
                  <button className="custom-btn">Shop Now</button>
                </div>
              </div>

              <div className="card" style={{ width: "16rem" }}>
                <img src={deal4} className="card-img-top" alt="Deal 4" />
                <div className="card-body text-center">
                  <h5 className="card-title">Vet Checkup Plans</h5>
                  <p className="card-text">Annual care plans starting at ₹999!</p>
                  <button className="custom-btn">Know More</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#featuredDealsCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#featuredDealsCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default FeaturedDeals;
