import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CategoriesBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="categories-bar">
      {categories.map((category) => (
        <Link key={category} to={`/category/${category}`} className="category-link">
          {category}
        </Link>
      ))}
    </div>
  );
}

export default CategoriesBar;
