import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../presentation/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsRef = collection(db, "products");
      let q = productsRef;

      if (categoryId) {
        q = query(productsRef, where("category", "==", categoryId));
      }

      const querySnapshot = await getDocs(q);
      const products = querySnapshot.docs.map(doc => doc.data());
      setItems(products);
    };

    fetchProducts();
  }, [categoryId]);

  return items.length > 0 ? <ItemList items={items} /> : <p>Cargando productos...</p>;
}
