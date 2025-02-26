import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/FetchProducts";
import useCart from "../context/useCart";

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useFetchProducts();
  const { addToCart } = useCart() || {}; // Ensure useCart is not undefined
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <p>Produkten hittades inte.</p>;

  return (
    <div className="product-card-details">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.category}</p>
      <p>Pris: {product.price} SEK</p>
      <p>{product.description}</p>
      <p>Betyg: {product.rating.rate}</p>
      <p>Antal recensioner: {product.rating.count}</p>
      <button onClick={() => addToCart && addToCart(product)}>Lägg till i kundvagn</button>
    </div>
  );
};

export default ProductPage;
