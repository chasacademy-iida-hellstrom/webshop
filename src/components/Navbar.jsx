import { LuAlignJustify } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineSearch } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const menuRef = useRef(null);
  const location = useLocation(); // *Get the current location of the app*

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalItems);
  };

  useEffect(() => {
    updateCartCount();
    const handleCartUpdate = () => updateCartCount();
    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // *Close hamburger menu)**
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ** close menu when the page is changed *
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <ul className="navList">
        <li>
          <Link to="/search">
            <MdOutlineSearch className="navIcons" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FiHome className="navIcons" />
          </Link>
        </li>
        <li>
          <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <LuAlignJustify className="navIcons" />
          </button>
        </li>
        <li>
          <Link to="/favorites">
            <FaRegHeart className="navIcons" />
          </Link>
        </li>
        <li>
          <Link to="/cart" className="cart-link">
            <HiOutlineShoppingBag className="navIcons" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </li>
      </ul>

      {isMenuOpen && (
        <div className="dropdown-menu" ref={menuRef}>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <Link to={`/category/${category}`} onClick={() => setIsMenuOpen(false)}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
