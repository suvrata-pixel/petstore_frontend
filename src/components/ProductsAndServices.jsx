import React from "react";
import "./ProductsAndServices.css";
import cats3 from "../assets/cats3.jpg";
import puppy1 from "../assets/puppy1.jpg";
import petParent from "../assets/petParent.jpg";
import grooming from "../assets/grooming.jpg";
import med from "../assets/med.jpg";

const products = [
  {
    name: "For Cats",
    img: cats3,
  },
  {
    name: "For Dogs",
    img: puppy1,
  },
  {
    name: "Pet Parents",
    img: petParent,
  },
  {
    name: "Grooming & Spa",
    img: grooming,
  },
  {
    name: "Medical Service",
    img: med.,
  },
];

const ProductsAndServices = () => {
  return (
    <section className="py-5 text-center bg-light" id="products-services">
      <div className="container">
        <h2 className="prdct-serv mb-4 fw-bold">Products & Services</h2>
        <div className="row justify-content-center">
          {products.map((item, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="product-item">
                <img
                  src={item.img}
                  alt={item.name}
                  className="img-fluid rounded-circle product-img"
                />
                <p className="mt-2 fw-semibold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsAndServices;