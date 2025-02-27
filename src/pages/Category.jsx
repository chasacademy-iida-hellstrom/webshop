import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import ProductCard from "../components/ProductCard";

const Category = ({ setCartCount }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [category]);

  return (
    <div>
      <h1>Category: {category}</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} setCartCount={setCartCount} />
        ))}
      </div>
    </div>
  );
};

Category.propTypes = {
  setCartCount: PropTypes.func.isRequired,
};

export default Category;
