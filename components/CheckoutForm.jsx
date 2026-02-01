import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CheckoutForm() {
  const { cart } = useContext(CartContext);

  const handleCheckout = async () => {
    if (cart.length === 0) return alert("Carrito vacío");

    const ordersRef = collection(db, "orders");
    const docRef = await addDoc(ordersRef, {
      items: cart,
      date: new Date(),
    });
    alert(`Compra realizada! ID: ${docRef.id}`);
  };

  return <button onClick={handleCheckout}>Finalizar Compra</button>;
}
