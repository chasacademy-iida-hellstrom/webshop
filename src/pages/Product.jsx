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
  const isProductFavorite = storedFavorites.some((fav) => fav.id === product?.id);
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
            price: product.price
          });
        }
      } else {
        updatedFavorites = updatedFavorites.filter((fav) => fav.id !== product.id);
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
            <h2>Pris: {product.price} SEK</h2>
            <button className="favorite-button" onClick={toggleFavorite}>
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
          <button className="add-button" onClick={() => addToCart && addToCart(product)}>
            Lägg till i kundvagn
          </button>
          <h3>Beskrivning</h3>
          <p>{product.description}</p>
          <div className="product-card-details-row">
            <p>Betyg: {product.rating.rate}</p>
            <p>Antal recensioner: {product.rating.count}</p>
          </div>
        </div>
      </div>

      <div className="product-card-details-desktop">
        <img src={product.image} alt={product.name} />
        <div className="product-card-details">
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <div className="product-card-details-row">
            <h2>Pris: {product.price} SEK</h2>
            <button className="favorite-button" onClick={toggleFavorite}>
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
          <button className="add-button" onClick={() => addToCart && addToCart(product)}>
            Lägg till i kundvagn
          </button>
          <h3>Beskrivning</h3>
          <p>{product.description}</p>
          <div className="product-card-details-row">
            <p>Betyg: {product.rating.rate}</p>
            <p>Antal recensioner: {product.rating.count}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
