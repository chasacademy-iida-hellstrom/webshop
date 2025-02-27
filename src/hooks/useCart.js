import { useState, useEffect } from "react";

const useCart = () => {
    const [cart, setCart] = useState(() => {
        // ✅ Hämta cart från localStorage ENDAST vid start (förhindrar dubbeluppladdning)
        return JSON.parse(localStorage.getItem("cart")) || [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));
    }, [cart]); // ✅ Uppdatera bara när cart ändras, inte vid varje sidladdning

    const addToCart = (product) => {
        setCart(prevCart => {
            let updatedCart = prevCart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );

            if (!prevCart.some(item => item.id === product.id)) {
                updatedCart = [...prevCart, { ...product, quantity: 1 }];
            }

            return updatedCart;
        });
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const updateQuantity = (id, newQuantity) => {
        setCart(prevCart => {
            if (newQuantity <= 0) {
                return prevCart.filter(item => item.id !== id);
            }
            return prevCart.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            );
        });
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return { cart, addToCart, removeFromCart, updateQuantity, getTotalPrice };
};

export default useCart;
