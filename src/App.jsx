import CartProvider from "./context/CartContext";
import AppRouter from "./Router";

const App = () => {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
};

export default App;
