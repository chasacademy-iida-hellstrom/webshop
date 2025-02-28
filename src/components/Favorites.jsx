import React from "react";
import useFavorites from "../hooks/useFavorites";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div>
      <h2>Favoriter</h2>
      {favorites.length === 0 ? (
        <p>Du har inga favoriter.</p>
      ) : (
        <ul className="product-list">
          {favorites.map(item => (
            <li key={item.id} className="product-card">
              <Link to={`/products/${item.id}`} className="product-link">
                <div className="image-container">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="product-info">
                  <p>{item.title}</p>
                  <p>{item.price} kr</p>
                </div>
              </Link>
              <button onClick={() => removeFromFavorites(item.id)}>Ta bort</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
