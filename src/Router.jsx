import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import OrderConfirmation from "./components/OrderConfirmation";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

const AppRouter = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><a href="/">Hem</a></li>
          <li><a href="/about">Om oss</a></li>
          <li><a href="/products">Produkter</a></li>
          <li><a href="/cart">Kundvagn</a></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList  />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    <SearchBar/>
      <Navbar />
    </Router>
  );
};

export default AppRouter;
