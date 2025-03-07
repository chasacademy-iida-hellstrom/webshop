import { useState, useEffect } from "react";

const useCart = () => {
  const getStoredCart = () => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  };

  const [cart, setCart] = useState(getStoredCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || prevCart;
      const existingItem = storedCart.find((item) => item.id === product.id);

      let updatedCart;
      if (existingItem) {
        updatedCart = storedCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...storedCart, { ...product, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) => {
      if (newQuantity <= 0) {
        return prevCart.filter((item) => item.id !== id);
      }
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
  };
};

export default useCart;
