import Footer from "./components/Footer";
import CartProvider from "./context/CartContext";
import AppRouter from "./Router";
import useFavorites from "./hooks/useFavorites";

const App = () => {
  const favorites = useFavorites();

  return (
    <CartProvider>
      <AppRouter />
      <Footer />
    </CartProvider>
  );
};

export default App;
