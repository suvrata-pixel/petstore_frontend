// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("products");
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form states
  const [form, setForm] = useState({
    name: "", price: "", category: "Dog", description: "", image: ""
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    Promise.all([
      fetch("https://purrchasehub-backend.onrender.com/products").then(r => r.json()),
      fetch("https://purrchasehub-backend.onrender.com/users").then(r => r.json())
    ]).then(([p, u]) => {
      setProducts(p);
      setUsers(u);
      setLoading(false);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingId
      ? `https://purrchasehub-backend.onrender.com/products/${editingId}`
      : "https://purrchasehub-backend.onrender.com/products";

    const method = editingId ? "PATCH" : "POST";
    const body = editingId
      ? { ...form }
      : { ...form, id: Date.now(), isActive: true };

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    setForm({ name: "", price: "", category: "Dog", description: "", image: "" });
    setEditingId(null);
    fetchData();
  };

  const toggleProduct = (id, current) => {
    fetch(`https://purrchasehub-backend.onrender.com/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isActive: !current })
    }).then(() => fetchData());
  };

  const toggleUser = (id, current) => {
    fetch(`https://purrchasehub-backend.onrender.com/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isActive: !current })
    }).then(() => fetchData());
  };

  const startEdit = (p) => {
    setForm({ name: p.name, price: p.price, category: p.category, description: p.description, image: p.image });
    setEditingId(p.id);
  };

  if (loading) return <div className="text-center py-5"><div className="spinner-border text-success"></div></div>;

  return (
    <div className="container py-5" style={{ paddingTop: "100px" }}>
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h1 className="display-5 fw-bold text-success">Admin Dashboard</h1>
          <p>Welcome, {user.email} | <button onClick={logout} className="btn btn-sm btn-danger">Logout</button></p>
        </div>
      </div>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === "products" ? "active" : ""}`} onClick={() => setActiveTab("products")}>
            Products ({products.length})
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === "users" ? "active" : ""}`} onClick={() => setActiveTab("users")}>
            Users ({users.length})
          </button>
        </li>
      </ul>

      {activeTab === "products" && (
        <>
          <div className="card mb-4 shadow">
            <div className="card-body">
              <h3>{editingId ? "Edit" : "Add New"} Product</h3>
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6"><input className="form-control" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required /></div>
                <div className="col-md-3"><input type="number" className="form-control" placeholder="Price" value={form.price} onChange={e => setForm({...form, price: e.target.value})} required /></div>
                <div className="col-md-3">
                  <select className="form-select" value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
                    <option>Dog</option><option>Cat</option>
                  </select>
                </div>
                <div className="col-12"><input className="form-control" placeholder="Description" value={form.description} onChange={e => setForm({...form, description: e.target.value})} required /></div>
                <div className="col-12"><input className="form-control" placeholder="Image URL" value={form.image} onChange={e => setForm({...form, image: e.target.value})} /></div>
                <div className="col-12">
                  <button type="submit" className="btn btn-success me-2">{editingId ? "Update" : "Add"} Product</button>
                  {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({name:"",price:"",category:"Dog",description:"",image:""}); }} className="btn btn-secondary">Cancel</button>}
                </div>
              </form>
            </div>
          </div>

          <div className="row g-4">
            {products.map(p => (
              <div key={p.id} className={`col-md-6 ${!p.isActive ? "opacity-50" : ""}`}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex justify-content-between align-items-start">
                    <div>
                      <h5>{p.name}</h5>
                      <p className="text-muted small">{p.category} • ₹{p.price}</p>
                      <p className="text-success small">{p.isActive ? "Active" : "Inactive"}</p>
                    </div>
                    <div>
                      <button onClick={() => startEdit(p)} className="btn btn-sm btn-warning me-2">Edit</button>
                      <button onClick={() => toggleProduct(p.id, p.isActive)} className={`btn btn-sm ${p.isActive ? "btn-danger" : "btn-success"}`}>
                        {p.isActive ? "Deactivate" : "Activate"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === "users" && (
        <div className="row g-4">
          {users.map(u => (
            <div key={u.id} className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h6>{u.email}</h6>
                    <small className="text-muted">Role: {u.role}</small>
                    <span className={`badge ms-2 ${u.isActive ? "bg-success" : "bg-danger"}`}>
                      {u.isActive ? "Active" : "Blocked"}
                    </span>
                  </div>
                  <button onClick={() => toggleUser(u.id, u.isActive)} className={`btn btn-sm ${u.isActive ? "btn-danger" : "btn-success"}`}>
                    {u.isActive ? "Block" : "Unblock"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;