import { useState, useEffect } from "react";

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const updateCart = (newCart) => {
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const addToCart = (product) => {
        let updatedCart = [...cart];
        const existingProduct = updatedCart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            updatedCart.push({ ...product, quantity: 1 });
        }

        updateCart(updatedCart);
    };

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        updateCart(updatedCart);
    };

    
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(id);
            return;
        }
        
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );

        updateCart(updatedCart);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return { cart, addToCart, removeFromCart, updateQuantity, getTotalPrice };
};

export default useCart;
