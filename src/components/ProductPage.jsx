import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useFetchProducts();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <p>Produkten hittades inte.</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Pris: {product.price} SEK</p>
    </div>
  );
};

export default ProductPage;
