import { useState } from "react";
import PropTypes from "prop-types";

const ProductItem = ({ product }) => {
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const isProductFavorite = storedFavorites.some(
    (fav) => fav.id === product.id
  );

  const [isFavorite, setIsFavorite] = useState(isProductFavorite);

  const toggleFavorite = () => {
    let updatedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!isFavorite) {
      updatedFavorites.push(product);
    } else {
      updatedFavorites = updatedFavorites.filter(
        (fav) => fav.id !== product.id
      );
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="border p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain"
      />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-green-600 font-bold">{product.price}</p>
      <button
        onClick={() => toggleFavorite(product)}
        className={`text-2xl ${isFavorite ? "text-red-500" : "text-gray-400"}`}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
};
ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;
