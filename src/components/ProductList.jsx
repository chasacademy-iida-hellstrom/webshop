import useFetchProducts from "../hooks/FetchProducts";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();

  console.log("Rendering ProductList:", products);

  if (loading) return <p>Laddar produkter...</p>;
  if (error) return <p>Ett fel uppstod: {error}</p>;

  return (
    <div>
      <h2>Produkter</h2>
      {products.length === 0 ? ( 
        <p>Inga produkter hittades.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} width="50" />
                <p>{product.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
