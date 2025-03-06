import { LuAlignJustify } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineSearch } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
//import SearchBar from "./SearchBar"; // Uncomment this line
import Logo from "../Images/logo.svg";
//import "./SearchBar.css";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [hasFavorites, setHasFavorites] = useState(false);
  //const [isSearchOpen, setIsSearchOpen] = useState(false); // Ensure this line is added
  const menuRef = useRef(null);
  //const searchRef = useRef(null); // Ensure this line is added
  const location = useLocation(); // *Get the current location of the app*
  const navigate = useNavigate();
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalItems);
  };

  const updateFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setHasFavorites(favorites.length > 0);
  };
  const handleFavoritesUpdate = () => {
    updateFavorites();
  };

  useEffect(() => {
    updateCartCount();
    updateFavorites();
    const handleCartUpdate = () => updateCartCount();

    window.addEventListener("cartUpdated", handleCartUpdate);
    window.addEventListener("favoritesUpdated", handleFavoritesUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
      window.removeEventListener("favoritesUpdated", handleFavoritesUpdate);
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

  /* useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); */

  /* useEffect(() => {
    setIsSearchOpen(false);
  }, [location.pathname]);
 */
  return (
    <>
      <nav className="navbar">
        <div className="logo-item">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <ul className="navList">
      
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
              {hasFavorites ? <FaHeart className="navIcons text-red-500" /> : <FaRegHeart className="navIcons" />}
            </Link>
          </li>
          <li>
            <Link to="/cart" className="cart-link">
              <HiOutlineShoppingBag className="navIcons" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </li>
          <li>
            <button className="search-button" onClick={() => navigate("/search")}>
              <MdOutlineSearch className="navIcons" />
            </button>
          </li>
        </ul>

        {isMenuOpen && (
          <div className="dropdown-menu" ref={menuRef}>
            <ul>
              <li key="all">
                <Link to="/products" onClick={() => setIsMenuOpen(false)}>
                  All Products
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category}>
                  <Link className="text-capitalize" to={`/category/${category}`} onClick={() => setIsMenuOpen(false)}>
                    {category}
                  </Link>
                </li>
              ))}
              
              <li key="about">
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      
     {/*  )}{isSearchOpen && (
        <div ref={searchRef}>
          <SearchBar />
        </div> */}
    </>
  );
};

export default Navbar;
