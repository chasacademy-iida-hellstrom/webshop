import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types"; 
import useCart from "../hooks/useCart"; 
import useFavorites from "../hooks/useFavorites";

const ProductCard = ({ product }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavorite = favorites.some(item => item.id === product.id);
  const { addToCart } = useCart(); 

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <li className="product-card" key={product.id}>
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="image-container">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <p>{product.title}</p>
          <button className="favorite-button" onClick={(e) => { 
            e.preventDefault();
            handleFavoriteClick();
          }}>
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
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

// Prop validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
