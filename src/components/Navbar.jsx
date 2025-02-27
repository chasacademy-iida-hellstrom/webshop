import { LuAlignJustify } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineSearch } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [cartCount, setCartCount] = useState(0);

    // Funktion för att räkna antalet produkter i kundvagnen
    const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        setCartCount(totalItems);
    };

    useEffect(() => {
        updateCartCount(); // Uppdatera vid sidladdning

        const handleCartUpdate = () => updateCartCount();
        window.addEventListener("cartUpdated", handleCartUpdate);

        return () => {
            window.removeEventListener("cartUpdated", handleCartUpdate);
        };
    }, []);

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
                    <Link to="/categories">
                        <LuAlignJustify className="navIcons" />
                    </Link>
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
        </nav>
    );
};

export default Navbar;
