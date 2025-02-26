import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <li className="product-card large-card" key={product.id}>
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="image-container">
          <img src={product.image} alt={product.title} className="centered-image" />
        </div>
        <div className="product-info">
          <p>{product.title}</p>
          <button className="favorite-button" onClick={toggleFavorite}>
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
