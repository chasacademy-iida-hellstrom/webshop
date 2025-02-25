import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductList from "./components/ProductList";  // Importera ProductList
import ProductPage from "./pages/ProductPage";  // Importera ProductPage

const AppRouter = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Hem</Link>
        <Link to="/about">Om oss</Link>
        <Link to="/products">Produkter</Link>  {/* Ny länk för Products */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />  {/* Ny rutt för ProductList */}
        <Route path="/product/:id" element={<ProductPage />} />  {/* Ny rutt för ProductPage */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
