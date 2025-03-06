import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const syncFavorites = () => {
      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    };

    window.addEventListener("favoritesUpdated", syncFavorites);
    syncFavorites();

    return () => {
      window.removeEventListener("favoritesUpdated", syncFavorites);
    };
  }, []);

  return (
    <div className="favorites-container">
      <h1 className="favorites-title">Mina Favoriter</h1>
      <section className="favorites-card-wrapper">
        {favorites.length === 0 ? (
          <div className="empty-favorites">
            <h1>Save your favorite items</h1>
            <p>Want to save your favorite items? Just click on the heart icon found on the product image and it will show up here.</p>
            <Link to="/products" className="favorite-button">
              Browse now
            </Link>
          </div>
        ) : (
          <ul className="product-list">
            {favorites.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Favorites;
