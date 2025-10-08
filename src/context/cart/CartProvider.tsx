import { useState, useEffect, useMemo } from 'react';
import type { Product } from '../../models/products';
import type { CartItem, CartContextType } from '../../models/cart';
import {CartContext} from './CartContext';


const CART_STORAGE_KEY = 'min-commerce.cart';


export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error al cargar los datos del LocalStorage", error);
      return [];
    }
  });


  // Efecto para guardar el carrito cada vez que cambia 
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error al guardar los datos en el LocalStorage", error);
    }
  }, [cartItems]);


  const cartCount = useMemo(() => 
    cartItems.reduce((total, item) => total + item.quantity, 0), 
    [cartItems]
  );
  
  
  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // Actualizar cantidad si el producto ya existe
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        // Añadir nuevo item al carrito
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    // Eliminar un producto por completo
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    setCartItems(prevItems => {
      // Si la nueva cantidad es 0 o menos, eliminar el item
      if (newQuantity <= 0) {
        return prevItems.filter(item => item.id !== productId);
      }
      // Actualizar la cantidad del item
      return prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const clearCart = () => {
    // Vaciar el carrito
    setCartItems([]);
  };

  // Objeto de valor que se provee a los consumidores
  const contextValue: CartContextType = {
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};