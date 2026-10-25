import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products } from "../data/products";

const CartContext = createContext(null);
const KEY = "huehaven-cart";

// Only { id, quantity } is stored. Images/prices always come from the product list,
// so rebuilt (re-hashed) image URLs never break a saved cart.
export function CartProvider({ children }) {
  const [lines, setLines] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "[]");
      return Array.isArray(saved)
        ? saved.map(({ id, quantity }) => ({ id, quantity }))
        : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(lines));
  }, [lines]);

  const cart = useMemo(
    () =>
      lines
        .map((line) => {
          const product = products.find((p) => p.id === line.id);
          return product ? { ...product, quantity: line.quantity } : null;
        })
        .filter(Boolean),
    [lines]
  );

  const addToCart = (product) =>
    setLines((items) =>
      items.some((i) => i.id === product.id)
        ? items.map((i) =>
            i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...items, { id: product.id, quantity: 1 }]
    );

  const removeFromCart = (id) =>
    setLines((items) => items.filter((i) => i.id !== id));

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setLines((items) => items.map((i) => (i.id === id ? { ...i, quantity } : i)));
  };

  const clearCart = () => setLines([]);

  const cartCount = cart.reduce((t, i) => t + i.quantity, 0);
  const subtotal = cart.reduce((t, i) => t + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
