
import React, { createContext, useState, useContext, useEffect } from 'react';


const getInitialCart = () => {
  const localData = localStorage.getItem('petShopCart');
  return localData ? JSON.parse(localData) : [];
};




const CartContext = createContext();


export const CartProvider = ({ children }) => {
 
  const [cartItems, setCartItems] = useState(getInitialCart);


  useEffect(() => {
  
    localStorage.setItem('petShopCart', JSON.stringify(cartItems));
  }, [cartItems]); 
  

  
  const addToCart = (product) => {
    
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      );
    } else {
      
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };


  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: newQuantity }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id)); 
  };
  
  
  
  const clearCart = () => {
    setCartItems([]);
  }
  


  
  const contextValue = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart, 
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  return useContext(CartContext);
};