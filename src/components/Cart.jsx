import { useState } from "react";
import useCart from "../hooks/useCart";
import OrderConfirmation from "./OrderConfirmation";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrder = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    clearCart(); //
    setIsModalOpen(false);
  };

  return (
    <div className="cart-wrapper">
      <h2>Shopping Bag</h2>

      {cart.length === 0 ? (
        <p>Your bag is empty.</p>
      ) : (
        <>
          <ul className="cart-container">
            {cart.map((item) => (
              <li key={item.id}>
                <p>{item.title}</p>
                <p>{item.price} $</p>
                <button className="amount-button" onClick={() => updateQuantity(item.id, item.quantity - 1)}></button>
                <span>{item.quantity}</span>
                <button className="amount-button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: {getTotalPrice()} $</h3>
          <button className="order-button" onClick={handleOrder}>
            Order
          </button>

          {isModalOpen && <OrderConfirmation closeModal={closeModal} />}
        </>
      )}
    </div>
  );
};

export default Cart;
