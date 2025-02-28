import React, { useState } from "react";
import useCart from "../hooks/useCart";
import OrderConfirmation from "./OrderConfirmation";
const Cart = () => {
const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
const [isModalOpen, setIsModalOpen] = useState(false);
const openModal = () => {
  setIsModalOpen(true);
};
const closeModal = () => {
  setIsModalOpen(false);
};
return (
  <div>
   <h2>Din kundvagn</h2>
   {cart.length === 0 ? (
    <p>Din kundvagn är tom.</p>
   ) : (
    <>
     <ul>
      {cart.map(item => (
       <li key={item.id}>
        <p>{item.title}</p>
        <p>{item.price} kr</p>
        {/* Knappar för att öka/minska antal */}
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
        <button onClick={() => removeFromCart(item.id)}>Ta bort</button>
       </li>
      ))}
     </ul>
     <h3>Totalt: {getTotalPrice()} kr</h3>
     {/* Beställ button */}
     <button onClick={openModal}>Beställ</button>
     {/* Order Confirmation Modal */}
     {isModalOpen && (
      <OrderConfirmation closeModal={closeModal} />
     )}
    </>
   )}
  </div>
);
};
export default Cart;