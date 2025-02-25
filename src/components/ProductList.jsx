import useFetchProducts from "../hooks/useFetchProducts";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <p>Laddar produkter...</p>;
  if (error) return <p>Ett fel uppstod: {error}</p>;

  return (
    <div>
      <h2>Produkter</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
