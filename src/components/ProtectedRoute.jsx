// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, isAdmin } = useAuth();
  const location = useLocation();

  // Not logged in → redirect to login (and remember where they were trying to go)
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Trying to access admin-only route but not admin → send to home
  if (adminOnly && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  // All good → show the protected page
  return children;
};

export default ProtectedRoute;