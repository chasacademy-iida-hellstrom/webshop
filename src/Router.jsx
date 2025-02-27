import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import OrderConfirmation from "./components/OrderConfirmation";
import Navbar from "./components/Navbar";

const AppRouter = () => {
  return (
    <Router>
      
      <Navbar />

      
      <nav>
        <ul>
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/about">Om oss</Link></li>
          <li><Link to="/products">Produkter</Link></li>
          <li><Link to="/cart">Kundvagn</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
