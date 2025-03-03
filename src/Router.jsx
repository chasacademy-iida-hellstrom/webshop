import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductList from "./components/ProductList";
import Product from "./pages/Product";
import Cart from "./components/Cart";
import OrderConfirmation from "./components/OrderConfirmation";
import Navbar from "./components/Navbar"; 
import SearchPage from "./pages/SearchPage";
import CategoriesBar from "./components/CategoriesBar";
import Category from "./pages/Category";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer";


const AppRouter = () => {
 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/categoriesBar" element={<CategoriesBar />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/favorites" element={<Favorites />} /> 
        <Route path="/search" element={<SearchPage />} />
      </Routes>
     <Footer />
    </Router>
  );
};

export default AppRouter;
