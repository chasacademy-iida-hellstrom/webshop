import { useState } from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites
  };
};

export default useFavorites;
