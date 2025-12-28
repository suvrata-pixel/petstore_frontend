// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // 1. Check if user already exists
      const checkRes = await fetch(`http://localhost:4000/users?email=${email}`);
      const existing = await checkRes.json();

      if (existing.length > 0) {
        setError("Email already registered!");
        setLoading(false);
        return;
      }

      // 2. Register new user
      const res = await fetch("https://purrchasehub-backend.onrender.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          role: "user",
          isActive: true,
        }),
      });

      if (res.ok) {
        // Auto login after registration
        const loginResult = await login(email, password);
        if (loginResult.success) {
          navigate("/");
        }
      }
    } catch (err) {
      setError("Registration failed. Is JSON Server running?");
    }
    setLoading(false);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow" style={{ maxWidth: "420px", width: "100%" }}>
        <div className="card-body p-5">
          <h2 className="text-center mb-4" style={{ color: "#4D805A" }}>
            Join the Family
          </h2>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="6"
                disabled={loading}
              />
            </div>
            <button className="custom-btn w-100" disabled={loading}>
              {loading ? "Creating Account..." : "Register"}
            </button>
          </form>



        <p className="text-center mt-3">
        Already have an account? <Link to="/login" style={{ color: '#a17fd8' }}>Login here</Link>
        </p>
         {/*} <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login here</Link>
          </p>*/}
        </div>
      </div>
    </div>
  );
};

export default Register;