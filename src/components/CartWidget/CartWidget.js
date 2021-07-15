import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  
  const total = cart.reduce((ctotal, item) => {
    return item.quantity + ctotal;
  }, 0);

  return (
    <span className={total === 0 ? "noAvailable" : "available"}> {total} </span>
  );
};

export default CartWidget;
