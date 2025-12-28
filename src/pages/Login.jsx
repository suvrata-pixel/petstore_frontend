// src/pages/Login.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login, user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        navigate('/admin', { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    const result = await login(email, password);
    if (!result.success) {
      setError(result.error || 'Invalid credentials');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center px-3" style={{ background: 'linear-gradient(135deg, #fdf2f8, #f8f5ff)', paddingTop: '70px' }}>
      <div className="card shadow-lg border-0" style={{ maxWidth: '440px', width: '100%', borderRadius: '20px' }}>
        <div className="card-body p-5">
          <h2 className="text-center mb-2 section-heading" style={{ fontSize: '2.2rem', color: '#8d6830' }}>
            Welcome Back!
          </h2>
          <p className="text-center text-muted mb-4" style={{ fontFamily: '"Shadows Into Light", cursive', fontSize: '1.2rem', color: '#6c757d' }}>
            Log in to your PetShop family
          </p>

          {error && (
            <div className="alert alert-danger d-flex justify-content-between align-items-center">
              <span>{error}</span>
              <button className="btn-close" onClick={() => setError('')}></button>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold" style={{ color: '#4D805A' }}>Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@petshop.com"
                disabled={loading || isSubmitting}
                style={{ borderRadius: '12px', borderColor: '#ddd' }}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold" style={{ color: '#4D805A' }}>Password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                disabled={loading || isSubmitting}
                style={{ borderRadius: '12px', borderColor: '#ddd' }}
              />
            </div>

            <button
              type="submit"
              disabled={loading || isSubmitting}
              className="custom-btn w-100 d-flex justify-content-center align-items-center"
              style={{ height: '50px', fontSize: '1.1rem' }}
            >
              {loading || isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" style={{ width: '1.2rem', height: '1.2rem' }}></span>
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link to="/forgot-password" className="text-decoration-none" style={{ color: '#a17fd8' }}>Forgot Password?</Link>
          </div>

          <div className="mt-4 text-center" style={{ fontFamily: '"Shadows Into Light", cursive', fontSize: '1.2rem', color: '#6c757d' }}>
            Don’t have an account yet?{" "}
            <Link 
              to="/register" 
              style={{ 
                color: '#dd7fbd', 
                fontWeight: '600', 
                textDecoration: 'underline' 
              }}
            >
              Register here
            </Link>
            {" "}and join the family!
          </div>

          {/*<div className="mt-4 p-3 rounded" style={{ background: '#f8f9fa', border: '1px dashed #ddd' }}>
            <p className="mb-1 fw-bold" style={{ color: '#4D805A' }}>Test Accounts:</p>
            <p className="mb-1"><strong>Admin:</strong> <code>admin@petshop.com</code> / <code>adminpass</code></p>
            <p className="mb-0"><strong>User:</strong> <code>user@petshop.com</code> / <code>userpass</code></p>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Login;