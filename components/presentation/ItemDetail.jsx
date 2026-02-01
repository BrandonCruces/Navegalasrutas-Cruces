import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../../context/CartContext";

export default function ItemDetail({ item }) {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  if (!item) return null;

  const handleAdd = (quantity) => {
    addItem(item, quantity);
    setAdded(true); // oculta ItemCount y muestra mensaje
  };

  return (
    <div style={{ padding: 20 }}>
      <img
        src={item.img}
        alt={item.name}
        width={300}
        onError={e => e.target.src="/default.jpg"}
      />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <h3>${item.price}</h3>

      {!added ? (
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      ) : (
        <p>Producto agregado al carrito ✅</p>
      )}
    </div>
  );
}
