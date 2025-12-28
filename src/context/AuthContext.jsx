
import React, { createContext, useState, useContext, useEffect } from 'react';

const getInitialUser = () => {
  const data = localStorage.getItem('petShopUser');
  try { return data ? JSON.parse(data) : null; }
  catch { localStorage.removeItem('petShopUser'); return null; }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getInitialUser);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) localStorage.setItem('petShopUser', JSON.stringify(user));
    else localStorage.removeItem('petShopUser');
  }, [user]);
  

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://purrchasehub-backend.onrender.com/users?email=${email}&password=${password}&isActive=true`
      );
      const users = await res.json();

      if (users.length === 0) {
        setLoading(false);
        return { success: false, error: "Invalid email, password, or account blocked" };
      }

      const loggedInUser = {
        id: users[0].id,
        email: users[0].email,
        role: users[0].role,
      };

      setUser(loggedInUser);
      setLoading(false);
      return { success: true };
    } catch (err) {
      setLoading(false);
      return { success: false, error: "Login failed. Is JSON Server running?" };
    }
  };


  const logout = () => {
    setUser(null);
    localStorage.removeItem('petShopUser');

    
    try {
      const cart = (AuthProvider._currentValue || {}).cart || require('./CartContext').useCart();
      if (cart?.clearCart) cart.clearCart();
    } catch (e) { /* ignore */ }

    
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = () => window.history.pushState(null, '', window.location.href);
  };

  const value = {
    user, loading,
    isAdmin: user?.role === 'admin',
    isAuthenticated: !!user,
    login, logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);