import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem } from "../types";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: { id: string; name: string; price: number; weightOption: string }, qty: number) => void;
  removeFromCart: (id: string, weightOption: string) => void;
  updateQuantity: (id: string, weightOption: string, qty: number) => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem("cake_cart");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Failed to parse cart from localStorage", e);
      return [];
    }
  });

  // Keep localStorage synced whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cake_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (
    item: { id: string; name: string; price: number; weightOption: string },
    qty: number
  ) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (i) => i.id === item.id && i.weightOption === item.weightOption
      );

      if (existingIndex > -1) {
        // Increment quantity of existing item with matching weight
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + qty,
        };
        return updated;
      } else {
        // Add new item
        return [
          ...prevItems,
          {
            id: item.id,
            name: item.name,
            price: item.price,
            weightOption: item.weightOption,
            quantity: qty,
          },
        ];
      }
    });
  };

  const removeFromCart = (id: string, weightOption: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.weightOption === weightOption))
    );
  };

  const updateQuantity = (id: string, weightOption: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id, weightOption);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.weightOption === weightOption ? { ...item, quantity: qty } : item
      )
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartCount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
