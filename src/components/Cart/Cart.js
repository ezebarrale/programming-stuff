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

const btnStyle = {
  margin: "40px"
}

const btnDeleteStyle = {
  margin: "10px"
}

function Cart() {
  const { cart } = useContext(CartContext);

  const { clearCart } = useContext(CartContext);
  const clear = () => clearCart();

  const { removeToCart } = useContext(CartContext);
  const remove = (itemId) => removeToCart(itemId);

  const total = cart.reduce((ctotal, item) =>{
    return (item.price*item.quantity) + ctotal
  },0)
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
              <Button style={btnDeleteStyle} onClick={() => remove(item.id)} icon="delete" size="small" color="yellow"/>
          </li>;
        })}
      </ul>

      <h2>Total to pay $
        {total}
    
      </h2>
      <div style={btnStyle}>
        <Button content="PAY" size="big" color="yellow"/>
        <Button onClick={() => clear()} content="CLEAN" size="big" color="yellow"/>
      </div>

    </div>
  );
}

export default Cart;
