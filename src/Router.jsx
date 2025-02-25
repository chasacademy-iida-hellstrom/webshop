import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductList from "./components/ProductList"; 
import ProductPage from "./pages/ProductPage";  

const AppRouter = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Hem</Link>
        <Link to="/about">Om oss</Link>
        <Link to="/products">Produkter</Link>  
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />  
        <Route path="/product/:id" element={<ProductPage />} />  
      </Routes>
    </Router>
  );
};

export default AppRouter;
