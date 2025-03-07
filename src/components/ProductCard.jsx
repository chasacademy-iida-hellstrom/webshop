import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";
import useCart from "../hooks/useCart";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const getStoredFavorites = () =>
    JSON.parse(localStorage.getItem("favorites")) || [];

  const [isFavorite, setIsFavorite] = useState(() => {
    return getStoredFavorites().some((fav) => fav.id === product.id);
  });

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

    let storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let favoritesMap = new Map(storedFavorites.map((fav) => [fav.id, fav]));

    if (isFavorite) {
      favoritesMap.delete(product.id);
    } else {
      favoritesMap.set(product.id, {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
      });
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify([...favoritesMap.values()])
    );

    setIsFavorite(!isFavorite);

    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (isAdding) return;
    setIsAdding(true);

    addToCart(product);

    setTimeout(() => {
      setIsAdding(false);
    }, 200);
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
            {isFavorite ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-500" />
            )}
          </button>
        </div>
      </Link>
      <button
        className="add-to-cart-button"
        onClick={handleAddToCart}
        disabled={isAdding}
      >
        {isAdding ? "Adding..." : "Add to cart"}
      </button>
    </li>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
