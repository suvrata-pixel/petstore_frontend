import React from "react";
import "./ProductsAndServices.css";

const products = [
  {
    name: "For Cats",
    img: "/src/assets/cats3.jpg",
  },
  {
    name: "For Dogs",
    img: "/src/assets/puppy1.jpg",
  },
  {
    name: "Pet Parents",
    img: "/src/assets/petParent.jpg",
  },
  {
    name: "Grooming & Spa",
    img: "/src/assets/grooming.jpg",
  },
  {
    name: "Medical Service",
    img: "/src/assets/med.jpg",
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