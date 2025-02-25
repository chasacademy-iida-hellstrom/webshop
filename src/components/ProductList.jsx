import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products') // Hämta produkter från API:et
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div>
      <h1>Produkter</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h3>{product.title}</h3>
            </Link>
            <p>{product.price} kr</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
