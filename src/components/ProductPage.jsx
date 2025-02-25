import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ProductPage = () => {
  const { id } = useParams() // Hämta produktens ID från URL:en
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [id])

  if (!product) return <p>Laddar...</p>

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price} kr</p>
      <img src={product.image} alt={product.title} width="200" />
    </div>
  )
}

export default ProductPage
