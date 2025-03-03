import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() =>{
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error("Error fecthing products:", error));
  }, []);

  // Filtrering från sökfråga

  useEffect(() => {
    if (query.trim() !== ""){
      const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    setSelectedIndex(-1);
    }else {
      setFilteredProducts([]);
    }
  }, [query, products]);

  const handleSelectProduct = (product) => {
    //setQuery(product.title);
    setQuery("");
    setFilteredProducts([]);
    navigate(`/products/${product.id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Arrodown") {
      setSelectedIndex((prevIndex) =>
        prevIndex < filteredProducts.length -1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (e.key === "Enter" && selectedIndex !== -1) {
      e.preventDefault();
      handleSelectProduct(filteredProducts[selectedIndex]);
    }
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.searchContainer}>
      <form style={styles.searchForm}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Sök produkter..."
          style={styles.searchInput}
        />
      </form>

      {filteredProducts.length > 0 && (
      <ul style={styles.dropdown}>
        {filteredProducts.slice(0,5).map((product, index) => (
          <li key={product.id}
          style={{
            ...styles.dropdownItem, backgroundColor: selectedIndex === index ? "#f0f0f0" : "white", }}
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

// Stilar för searchbar-komponenten
const styles = {
  /* container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "10px",
  }, */
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  searchContainer: {
    position: "relative",
    /* top: "50px",
    left: "50%",
    transform: "translateX(-50%)", */
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    width: "90%",
    maxWidth: "600px",
    textAlign: "center",
   /*  zIndex: 1000, */
  },
  searchForm: {
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
  },
  
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    backgroundColor: "white",
    border: "1px solid #ddd",
    borderRadius: "5px",
    listStyle: "none",
    padding: "0",
    marginTop: "5px",
    zIndex: "10",
  },
  dropdownItem: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #ddd",
  },
}; 

export default SearchBar;
