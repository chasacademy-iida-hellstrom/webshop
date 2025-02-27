import { LuAlignJustify } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineSearch } from "react-icons/md";

const Navbar = () => {
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
          <HiOutlineShoppingBag className="navIcons" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

