import { Link } from "react-router-dom"

export default function ItemCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, width: 200 }}>
      <img src={product.img} width="100%" alt={product.name}/>
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  )
}
