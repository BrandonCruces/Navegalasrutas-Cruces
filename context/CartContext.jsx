import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id);
      if (existing) {
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
        );
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
  };

  const clearCart = () => setCart([]); // ✅ limpiar carrito

  const getTotalQuantity = () =>
    cart.reduce((acc, item) => acc + item.quantity, 0);

  const getTotalPrice = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, clearCart, getTotalQuantity, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
