
import useCart from "../hooks/useCart";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

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
                
               
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>

                <button onClick={() => removeFromCart(item.id)}>Ta bort</button>
              </li>
            ))}
          </ul>
          <h3>Totalt: {getTotalPrice()} kr</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
