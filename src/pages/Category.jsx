import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
      <ul className="breadcrumb">
        <li>
          <Link to="/products">All Products</Link>
        </li>
        <li>{category}</li>
      </ul>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            setCartCount={setCartCount}
          />
        ))}
      </div>
    </div>
  );
};

Category.propTypes = {
  setCartCount: PropTypes.func.isRequired,
};

export default Category;
