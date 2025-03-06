import useFetchProducts from "../hooks/FetchProducts";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();

  console.log("Rendering ProductList:", products);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something is wrong! {error}</p>;

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>ٔNo products found</p>
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
