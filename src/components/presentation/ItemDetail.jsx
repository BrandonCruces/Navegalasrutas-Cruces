export default function ItemDetail({ item }) {
  return (
    <div style={{ padding: 20 }}>
      <img src={item.img} width={300} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <h3>${item.price}</h3>

      <button>Agregar al carrito</button>
    </div>
  )
}
