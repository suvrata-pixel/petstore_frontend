// src/pages/Products.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

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

  // Fetch products from json-server
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

  // Search + Filter + Sort
  useEffect(() => {
    let result = [...products];

    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }

    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);

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

      {/* Filters */}
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
          <select className="form-select form-control-lg" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="Dog">Dog Only</option>
            <option value="Cat">Cat Only</option>
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select form-control-lg" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="default">Default Order</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Cards */}
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
                  src={product.image || "https://via.placeholder.com/300x250/f8d7da/333?text=No+Image"}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="text-muted small">
                    {product.category} • {product.description}
                  </p>

                  <div className="mt-auto">
                    <p className="h4 text-success fw-bold text-center mb-3">₹{product.price}</p>

                    <button
                      className="btn btn-outline-success w-100 mb-2"
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

                    <Link to={`/product/${product.id}`} className="btn custom-btn w-100">
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