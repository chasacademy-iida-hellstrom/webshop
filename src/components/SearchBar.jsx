import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./SearchBar.css"; // Import the CSS file

const SearchBar = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    if (query.trim() !== "") {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
      setSelectedIndex(-1);
    } else {
      setFilteredProducts([]);
    }
  }, [query, products]);

  const handleSelectProduct = (product) => {
    navigate(`/products/${product.id}`);
    setFilteredProducts([]);
    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        prevIndex < filteredProducts.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (e.key === "Enter" && selectedIndex !== -1) {
      e.preventDefault();
      handleSelectProduct(filteredProducts[selectedIndex]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="overlay">
      <div ref={searchContainerRef} className="searchContainer">
        <form className="searchForm">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Sök produkter..."
            className="searchInput"
            autoFocus
          />
        </form>

        {filteredProducts.length > 0 && (
          <ul className="dropdown">
            {filteredProducts.slice(0, 5).map((product, index) => (
              <li
                key={product.id}
                className={`dropdownItem ${
                  selectedIndex === index ? "selected" : ""
                }`}
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => handleSelectProduct(product)}
              >
                {product.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SearchBar;
