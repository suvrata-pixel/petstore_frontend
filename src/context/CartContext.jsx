
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
  }, [cartItems]); // Dependency array: runs when cartItems changes
  // ---------------------------------------------------------------------------------

  // Function to add a product to the cart
  const addToCart = (product) => {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Increment quantity
            : item
        )
      );
    } else {
      // If it's a new item, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to update the quantity of an item in the cart
  // Note: Your existing logic to remove if quantity <= 0 is perfect!
  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: newQuantity } // Update quantity
          : item
      ).filter(item => item.quantity > 0) // Remove item if quantity drops to 0 or less
    );
  };

  // Function to remove an item completely from the cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id)); // Filter out the item with the given id
  };
  
  // ---------------------------------------------------------------------------------
  // 💡 Additional Action: Clear Cart (For Logout/Checkout - Required by spec)
  const clearCart = () => {
    setCartItems([]);
  }
  // ---------------------------------------------------------------------------------


  // The 'value' object provides the data (cartItems) and actions
  const contextValue = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart, // New function for spec requirements
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Create a custom hook to use the cart easily
export const useCart = () => {
  return useContext(CartContext);
};