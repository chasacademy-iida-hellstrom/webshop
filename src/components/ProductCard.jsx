import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useCart from "../hooks/useCart"; 
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart(); 

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
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
            toggleFavorite();
          }}>
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </Link>
      <button 
        className="add-to-cart-button" 
        onClick={(e) => { 
          e.stopPropagation();
          addToCart(product); // ✅ Tar bort onödig event-hantering
        }}
      >
        Lägg till i kundvagn
      </button>
    </li>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
