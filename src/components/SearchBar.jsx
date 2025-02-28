import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/products?search=${query}`); // Navigera till produktlistans resultat
    }
  };

  return (
    <div style={styles.searchContainer}>
      <form onSubmit={handleSearch} style={styles.searchForm}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Sök produkter..."
          style={styles.searchInput}
        />
        <button type="submit" style={styles.searchButton}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
      <div>
      <ul>
            <li>Herr</li>
            <li>Dam</li>
            <li>Accessoar</li>
            <li>Elektronik</li>
        </ul>
      </div>
    </div>
  );
};

// Stilar för searchbar-komponenten
const styles = {
  searchContainer: {
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    margin: "auto",
  },
  searchForm: {
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    width: "80%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
  },
  searchButton: {
    backgroundColor: "#007BFF",
    border: "none",
    padding: "10px 15px",
    marginLeft: "10px",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
  },
}; 

export default SearchBar;
