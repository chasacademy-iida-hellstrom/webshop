import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types"; 
import useCart from "../hooks/useCart";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  // Hämta favoriter från localStorage och kolla om produkten är favorit
  const getStoredFavorites = () => JSON.parse(localStorage.getItem("favorites")) || [];
  
  const [isFavorite, setIsFavorite] = useState(() => {
    return getStoredFavorites().some((fav) => fav.id === product.id);
  });

  // Uppdatera när favoriter ändras globalt
  useEffect(() => {
    const syncFavorites = () => {
      setIsFavorite(getStoredFavorites().some((fav) => fav.id === product.id));
    };

    window.addEventListener("favoritesUpdated", syncFavorites);

    return () => {
      window.removeEventListener("favoritesUpdated", syncFavorites);
    };
  }, [product.id]);

  const handleFavoriteClick = (e) => {
    e.preventDefault();

    let updatedFavorites = getStoredFavorites();

    if (isFavorite) {
      updatedFavorites = updatedFavorites.filter((fav) => fav.id !== product.id);
    } else {
      updatedFavorites.push({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price
      });
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    
    // Uppdatera alla komponenter som lyssnar på favoriter
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (
    <li className="product-card" key={product.id}>
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="image-container">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <p>{product.title}</p>
          <button className="favorite-button" onClick={handleFavoriteClick}>
            {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-500" />}
          </button>
        </div>
      </Link>
      <button 
        className="add-to-cart-button" 
        onClick={(e) => { 
          e.stopPropagation();
          addToCart(product);
        }}
      >
        Lägg till i kundvagn
      </button>
    </li>
  );
};

// ✅ Lägg till prop-validering
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
