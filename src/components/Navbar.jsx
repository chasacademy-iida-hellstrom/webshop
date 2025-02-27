import { LuAlignJustify } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineSearch } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  // Funktion för att räkna totala produkter i kundvagnen
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalItems);
  };

  // Uppdatera antalet produkter vid sidladdning och när en ändring sker
  useEffect(() => {
    updateCartCount(); // Uppdatera vid sidladdning

    const handleCartUpdate = () => updateCartCount();
    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  return (
    <nav className="navbar">
      <ul className="navList">
        <li>
          <MdOutlineSearch className="navIcons" />
        </li>
        <li>
          <FiHome className="navIcons" />
        </li>
        <li>
          <LuAlignJustify className="navIcons" />
        </li>
        <li>
          <FaRegHeart className="navIcons" />
        </li>
        <li>
          <Link to="/cart" className="cart-link">
            <HiOutlineShoppingBag className="navIcons" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
