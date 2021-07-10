import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.some((elem) => elem.id === id);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartElement) => {
        if (cartElement.id === item.id) {
          return { ...cartElement, quantity: cartElement.quantity + quantity };
        } else {
          return cartElement;
        }
      });
      setCart(newCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  const removeToCart = (itemId) => {

    const newCart = cart.filter((itm) => itm.id !== itemId );
    setCart(newCart);

  };

  const totalToPay = () => {
    let total = 0;
    cart.reduce((cont, item) => {
      total = item.price * item.quantity + cont;
      return total;
    }, 0);
    console.log(total);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, clearCart, addToCart, removeToCart, totalToPay }}
    >
      {children}
    </CartContext.Provider>
  );
};
