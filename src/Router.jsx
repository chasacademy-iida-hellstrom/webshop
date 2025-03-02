import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductList from "./components/ProductList";
import Product from "./pages/Product";
import Cart from "./components/Cart";
import OrderConfirmation from "./components/OrderConfirmation";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoriesBar from "./components/CategoriesBar";
import Category from "./pages/Category";
import Favorites from "./pages/Favorites";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <SearchBar />
      <nav>
        <ul>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/about">Om oss</Link>
          </li>
          <li>
            <Link to="/products">Produkter</Link>
          </li>
          <li>
            <Link to="/cart">Kundvagn</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/categoriesBar" element={<CategoriesBar />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/favorites" element={<Favorites />} /> /*Endast via nedre navbar*/
      </Routes>
    </Router>
  );
};

export default AppRouter;
