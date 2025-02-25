import { useParams } from "react-router-dom";
import useCart from "../context/useCart"; 
import useFetchProducts from "../hooks/FetchProducts";

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useFetchProducts();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <p>Produkten hittades inte.</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Pris: {product.price} SEK</p>
      <button onClick={() => addToCart(product)}>Lägg till i kundvagn</button>
    </div>
  );
};

export default ProductPage;
