import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../presentation/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase"; // tu config de Firebase

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true); // para mostrar cargando
  const [error, setError] = useState(false);

  const { itemId } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "products", itemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setItem({
            ...data,
            price: Number(data.price) // forzar a número
          });
        } else {
          // producto no encontrado
          setError(true);
        }
      } catch (err) {
        console.error("Error trayendo el producto:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [itemId]);

  if (loading) return <p style={{ padding: 20 }}>Cargando producto...</p>;
  if (error || !item) return <p style={{ padding: 20 }}>Producto no encontrado</p>;

  return <ItemDetail item={item} />;
}
