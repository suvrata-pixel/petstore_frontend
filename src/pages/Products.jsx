// src/pages/Products.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

import catfood from "../assets/cat_food1.png";
import dogfood from "../assets/dog_food1.png";
import dogtreat from "../assets/dog_treat1.png";
import royalcanine from "../assets/royalcanine.png";
import whiskas from "../assets/whiskas.png";
import pedigree from "../assets/pedigree.png";
import catnip from "../assets/catnip.png";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addToCart } = useCart();

  // Fetch products from JSON Server
  useEffect(() => {
    fetch("http://localhost:4000/products?isActive=true")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(() => {
        alert("Cannot load products. Is JSON Server running?");
        setLoading(false);
      });
  }, []);

  // Filter + Search + Sort
  useEffect(() => {
    let result = [...products];

    // Category filter (only Dog & Cat)
    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }

    // Search
    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort
    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    setFiltered(result);
  }, [products, search, category, sort]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-success" style={{ width: "3rem", height: "3rem" }}></div>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ paddingTop: "100px" }}>
      <h1 className="section-heading text-center mb-5">Our Products</h1>

      {/* Filters Row */}
      <div className="row mb-4 g-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select className="form-select form-select-lg" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="Dog">Dog Only</option>
            <option value="Cat">Cat Only</option>
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select form-select-lg" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="default">Default Order</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row g-4">
        {filtered.length === 0 ? (
          <div className="col-12 text-center py-5">
            <h3>No products found</h3>
          </div>
        ) : (
          filtered.map((product) => (
            <div key={product.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 hover-shadow">
                

              <img
                src={
                // If image is one of our imported assets → use it
                product.image === "catfood" ? catfood :
                product.image === "dogfood" ? dogfood :
                product.image === "dogtreat" ? dogtreat :
                product.image === "royalcanine" ? royalcanine :
                product.image === "whiskas" ? whiskas :
                product.image === "pedigree" ? pedigree :
                product.image === "catnip" ? catnip :
                // Otherwise try as URL, fallback to placeholder
                product.image || "https://via.placeholder.com/300x250/f8d7da/333?text=No+Image"
                }
                className="card-img-top"
                alt={product.name}
                style={{ height: "250px", objectFit: "cover" }}
              />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="text-muted small">{product.category} • {product.description}</p>
                  
                  <div className="mt-auto d-flex flex-column gap-2">
                    <p className="h4 text-success fw-bold text-center mb-3">₹{product.price}</p>

                      {/* Add to Cart Button - PROTECTED */}
                      <button
                      className="btn btn-outline-success"
                      onClick={() => {
                      if (!user) {
                      navigate("/login");
                      } else {
                      addToCart(product, 1);
                      alert(`${product.name} added to cart!`);
                      }
                      }}
                      >
                      Add to Cart
                      </button>

                    {/* View Details */}
                    <Link to={`/product/${product.id}`} className="btn custom-btn">
                    View Details
                    </Link>
                    </div>

                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;