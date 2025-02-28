import Footer from "./components/Footer";
import CartProvider from "./context/CartContext";
import AppRouter from "./Router";

const App = () => {
  return (
    <CartProvider>
      <AppRouter />
      <Footer />
    </CartProvider>
  );
};

export default App;
