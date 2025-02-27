import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/FetchProducts";
import useCart from "../context/useCart";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Import icons
import { useState } from "react"; // Import useState

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useFetchProducts();
  const { addToCart } = useCart() || {}; // Ensure useCart is not undefined
  const product = products.find((p) => p.id.toString() === id);

  const [isFavorite, setIsFavorite] = useState(false); // State for favorite

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  if (!product) return <p>Produkten hittades inte.</p>;

  return (
    <>
    <div className="product-card-details-mobile">
      <div className="product-card-details">
      <h2>{product.title}</h2>
      <p>{product.category}</p>
      <img src={product.image} alt={product.name}/>
      <div className="product-card-details-row">
      <h2>Pris: {product.price} SEK</h2>
      <button className="favorite-button" onClick={toggleFavorite}>
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <button className="add-button" onClick={() => addToCart && addToCart(product)}>Lägg till i kundvagn</button>
      <h3>Beskrivning</h3>
      <p >{product.description}</p>
      <div className="product-card-details-row">
        <p>Betyg: {product.rating.rate}</p>
        <p>Antal recensioner: {product.rating.count}</p>
      </div>
    </div>
    </div>

    <div className="product-card-details-desktop">
    <img src={product.image} alt={product.name}/>
    <div className="product-card-details">
      <h2>{product.title}</h2>
      <p>{product.category}</p>
      <div className="product-card-details-row">
      <h2>Pris: {product.price} SEK</h2>
      <button className="favorite-button" onClick={toggleFavorite}>
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <button className="add-button" onClick={() => addToCart && addToCart(product)}>Lägg till i kundvagn</button>
      <h3>Beskrivning</h3>
      <p >{product.description}</p>
      <div className="product-card-details-row">
        <p>Betyg: {product.rating.rate}</p>
        <p>Antal recensioner: {product.rating.count}</p>
      </div>
    </div>
    </div>
    </>
  );
};

export default ProductPage;
