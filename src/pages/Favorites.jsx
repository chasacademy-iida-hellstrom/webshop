import React, { useState, useEffect } from "react";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
        <div className="favorites-container">
            <h1 className="favorites-title">Mina Favoriter</h1>
            {favorites.length === 0 ? (
                <p className="no-favorites">Du har inga favoriter än.</p>
            ) : (
                <div className="favorites-grid">
                    {favorites.map((product) => (
                        <div key={product.id} className="favorite-card">
                            <img src={product.image} alt={product.title} className="favorite-image" />
                            <h3 className="favorite-title">{product.title}</h3>
                            <p className="favorite-price">{product.price} SEK</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
