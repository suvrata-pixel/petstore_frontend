import React from "react";
import caroline from "../assets/caroline.png"; // use your customer images here
import ian from "../assets/ian.png"; // or any placeholder images

const Testimonials = () => {
  return (
    <div className="container my-5 text-center">
      {/* Section Heading */}
      <h2 className="fw-bold mb-4" style={{ color: "rgb(141, 104, 48)", fontFamily: '"Caveat Brush", cursive' }}>
        What Our Customers Say 🐾
      </h2>

      {/* Testimonials Grid */}
      <div className="row justify-content-center">
        {/* Riya's Testimonial */}
        <div className="col-md-5 mb-4">
          <div className="card border-0 shadow-sm p-4">
            <img
              src={caroline}
              alt="Caroline F"
              className="rounded-circle mx-auto mb-3"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <p className="fst-italic">
              “Finally found a place that actually cares about cats! The scratching post I ordered is sturdy and stylish — my cat Luna loves it. Highly recommended!”
            </p>
            <h6 className="fw-bold mt-3">— Caroline F, Cat Mom 🐱</h6>
          </div>
        </div>

        {/* Aarav's Testimonial */}
        <div className="col-md-5 mb-4">
          <div className="card border-0 shadow-sm p-4">
            <img
              src={ian}
              alt="Ian S"
              className="rounded-circle mx-auto mb-3"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <p className="fst-italic">
              “I’ve never seen my dog this happy before! The toys and treats here are top quality — and the delivery was super fast too. Totally my go-to pet store now.”
            </p>
            <h6 className="fw-bold mt-3">— Ian S, Dog Owner 🐶</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
