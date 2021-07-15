import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const listStyle = {
  fontSize: "28px",
  padding: "20px",
};

const liStyle = {
  padding: "20px",
  textAlign: "left",
};

const iStyle = {
  display: "flex",
};

const btnStyle = {
  margin: "40px",
};

const btnDeleteStyle = {
  margin: "10px",
};

function Cart() {
  const { cart } = useContext(CartContext);

  const { clearCart } = useContext(CartContext);
  const clear = () => clearCart();

  const { removeToCart } = useContext(CartContext);
  const remove = (itemId) => removeToCart(itemId);

  const total = cart.reduce((ctotal, item) => {
    return item.price * item.quantity + ctotal;
  }, 0);

  return (
    <div>
      <h1>
        <code>your SHOPPING CART</code>
      </h1>
      <ul style={listStyle}>
        {cart.map((item) => {
          return (
            <div style={iStyle} key={item.id}>
              <li style={liStyle}>
                <span>{item.title}</span>
                <span> x {item.quantity}</span>
                <span> : ${item.price} p/u</span>
              </li>
              <Button
                style={btnDeleteStyle}
                onClick={() => remove(item.id)}
                icon="delete"
                size="small"
                color="yellow"
              />
            </div>
          );
        })}
      </ul>

      {total === 0 ? (
        <h1>No products in cart ...</h1>
      ) : (
        <h2>Total to pay ${total}</h2>
      )}
      {total === 0 ? (
        <div style={btnStyle}>
          <Link to="/">
            <Button content="HOME" size="big" color="yellow" />
          </Link>
        </div>
      ) : (
        <div style={btnStyle}>
          <Button content="PAY" size="big" color="yellow" />
          <Button
            onClick={() => clear()}
            content="CLEAN"
            size="big"
            color="yellow"
          />
        </div>
      )}
    </div>
  );
}

export default Cart;
