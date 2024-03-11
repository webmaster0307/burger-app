'use client';

import { IBurger } from '@/types/burger';
import React, { createContext, useState } from 'react';

export interface ICartItem {
  item: IBurger;
  count: number;
}

interface ICart {
  cart: ICartItem[];
  addToCart: (item: IBurger) => void;
  removeFromCart: (item: IBurger) => void;
}

export const CartContext = createContext<ICart>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  const addToCart = (item: IBurger) => {
    setCart((prevCart) => {
      const cartItem = prevCart.find((cartItem) => cartItem.item.id === item.id);
      if (cartItem) {
        return prevCart.map((cartItem) => {
          if (cartItem.item.id === item.id) {
            return { ...cartItem, count: cartItem.count + 1 };
          }
          return cartItem;
        });
      }
      return [...prevCart, { item, count: 1 }];
    });
  }

  const removeFromCart = (item: IBurger) => {
    setCart((prevCart) => {
      const cartItem = prevCart.find((cartItem) => cartItem.item.id === item.id);
      if (cartItem) {
        return prevCart.filter((cartItem) => cartItem.item.id !== item.id);
      }
      return prevCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};