import React, { useEffect, useState } from "react";
import CategoriesBar from "./CategoriesBar";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
