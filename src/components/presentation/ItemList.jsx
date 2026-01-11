import ItemCard from "./ItemCard"

export default function ItemList({ items }) {
  return (
    <div style={{ display: "flex", gap: 20, padding: 20 }}>
      {items.map(prod => (
        <ItemCard key={prod.id} product={prod} />
      ))}
    </div>
  )
}
