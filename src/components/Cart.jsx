import { useState } from "react";
import useCart from "../hooks/useCart";
import OrderConfirmation from "./OrderConfirmation";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrder = () => {
    setIsModalOpen(true); // Öppna modalen först
  };

  const closeModal = () => {
    clearCart(); // 🛒 Töm kundvagnen när modalen stängs
    setIsModalOpen(false); // Stäng modalen
  };

  return (
    <div className="cart-wrapper">
      <h2>Din kundvagn</h2>

      {cart.length === 0 ? (
        <p>Din kundvagn är tom.</p>
      ) : (
        <>
          <ul className="cart-container">
            {cart.map((item) => (
              <li key={item.id}>
                <p>{item.title}</p>
                <p>{item.price} kr</p>
                <button
                  className="amount-button"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  className="amount-button"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Ta bort
                </button>
              </li>
            ))}
          </ul>
          <h3>Totalt: {getTotalPrice()} kr</h3>
          <button className="order-button" onClick={handleOrder}>
            Beställ
          </button>

          {/* Skicka `closeModal` till OrderConfirmation */}
          {isModalOpen && <OrderConfirmation closeModal={closeModal} />}
        </>
      )}
    </div>
  );
};

export default Cart;
