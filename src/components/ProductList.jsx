import useFetchProducts from "../hooks/FetchProducts";
import CategoriesBar from "./CategoriesBar";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();

  console.log("Rendering ProductList:", products);

  if (loading) return <p>Laddar produkter...</p>;
  if (error) return <p>Ett fel uppstod: {error}</p>;

  return (
    <div>
      <CategoriesBar />
      <h2>Produkter</h2>
      {products.length === 0 ? (
        <p>Inga produkter hittades.</p>
      ) : (
        <ul className="product-list">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
