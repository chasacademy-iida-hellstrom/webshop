import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard"; // Använder samma komponent

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const syncFavorites = () => {
            const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
            setFavorites(storedFavorites);
        };

        // Lyssna på event när favoriter ändras
        window.addEventListener("favoritesUpdated", syncFavorites);

        // Kör en gång vid laddning
        syncFavorites();

        return () => {
            window.removeEventListener("favoritesUpdated", syncFavorites);
        };
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Mina Favoriter</h1>
            {favorites.length === 0 ? (
                <p>Du har inga favoriter än.</p>
            ) : (
                <ul className="product-list">
                    {favorites.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Favorites;
