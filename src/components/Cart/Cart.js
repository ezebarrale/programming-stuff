import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "semantic-ui-react";

const listStyle = {
    fontSize: "28px",
    padding: "20px"
}

const iStyle = {
    padding: "20px",
    textAlign: "left"
}

function Cart() {
  const { cart } = useContext(CartContext);

  const { clearCart } = useContext(CartContext);
  const clear = () => clearCart();

  return (
    <div>
      <h1>
        <code>your SHOPPING CART</code>
      </h1>
      <ul style={listStyle}>
        {cart.map((item) => {
          return <li key={item.id} style={iStyle}>
              <span >product: {item.title}</span>
              <span > - ${item.price}</span>
              <span > - quantity: {item.quantity}</span>
              <span > - TOTAL: ${item.price*item.quantity}</span>
          </li>;
        })}
      </ul>
      <div>
        <Button content="PAY" size="big" color="yellow"/>
        <Button onClick={() => clear()} content="CLEAN" size="big" color="yellow"/>
      </div>

    </div>
  );
}

export default Cart;
