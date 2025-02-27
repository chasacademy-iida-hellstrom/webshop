import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import OrderConfirmation from "./components/OrderConfirmation";
import Navbar from "./components/Navbar";
import CategoriesBar from "./components/CategoriesBar";

const AppRouter = () => {
  return (
    <Router>
      
      <Navbar />

      
      <nav>
        <ul>
<<<<<<< HEAD
          <li>
            <a href="/">Hem</a>
          </li>
          <li>
            <a href="/about">Om oss</a>
          </li>
          <li>
            <a href="/products">Produkter</a>
          </li>
          <li>
            <a href="/cart">Kundvagn</a>
          </li>
=======
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/about">Om oss</Link></li>
          <li><Link to="/products">Produkter</Link></li>
          <li><Link to="/cart">Kundvagn</Link></li>
>>>>>>> 4ea465b17d1cef6129ed5bbba3d1217a58fb03c0
        </ul>
      </nav>

      {location.pathname.startsWith("/products") && <CategoriesBar />}
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
