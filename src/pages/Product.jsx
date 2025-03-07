import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/FetchProducts";
import useCart from "../hooks/useCart";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const Product = () => {
  const { id } = useParams();
  const { products } = useFetchProducts();
  const { addToCart } = useCart() || {};
  const product = products.find((p) => p.id.toString() === id);

  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const isProductFavorite = storedFavorites.some(
    (fav) => fav.id === product?.id
  );
  const [isFavorite, setIsFavorite] = useState(isProductFavorite);

  const toggleFavorite = () => {
    let updatedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    setIsFavorite((prevState) => {
      const newFavoriteState = !prevState;

      if (newFavoriteState) {
        if (!updatedFavorites.some((fav) => fav.id === product.id)) {
          updatedFavorites.push({
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
          });
        }
      } else {
        updatedFavorites = updatedFavorites.filter(
          (fav) => fav.id !== product.id
        );
      }

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      window.dispatchEvent(new Event("favoritesUpdated")); // Uppdatera globalt
      return newFavoriteState;
    });
  };

  if (!product) return <p>Product was not found</p>;

  return (
    <>
      <div className="product-card-details-mobile">
        <div className="product-card-details">
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <img src={product.image} alt={product.name} />
          <div className="product-card-details-row">
            <h2>Price: {product.price} $</h2>
            <button className="favorite-button" onClick={toggleFavorite}>
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
          <button
            className="add-button"
            onClick={() => addToCart && addToCart(product)}
          >
            Add to cart
          </button>
          <h3>Description</h3>
          <p>{product.description}</p>
          <div className="product-card-details-row">
            <p>Rate: {product.rating.rate}</p>
            <p>
              <small> ({product.rating.count} Reviews)</small>
            </p>
          </div>
        </div>
      </div>

      <div className="product-card-details-desktop">
        <img src={product.image} alt={product.name} />
        <div className="product-card-details">
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <div className="product-card-details-row">
            <h2>Price: {product.price} $</h2>
            <button className="favorite-button" onClick={toggleFavorite}>
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
          <button
            className="add-button"
            onClick={() => addToCart && addToCart(product)}
          >
            Add to cart.
          </button>
          <h3>Description</h3>
          <p>{product.description}</p>
          <div className="product-card-details-row">
            <p>Rate: {product.rating.rate}&nbsp;</p>
            <p>
              <small> ({product.rating.count} Reviews)</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
