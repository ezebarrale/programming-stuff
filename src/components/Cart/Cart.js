import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import './Cart.css';

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
        <code>YOUR SHOPPING CART</code>
      </h1>

      {total === 0 ? (
        <h1 className="noProd">No products in cart ...</h1>
      ) : (
        <ul className="listStyle">
         {cart.map((item) => {
          return (
            <div key={item.id} className="iStyle">
              <div className="listCont">
                <li className="liStyle">
                  <span>{item.title}</span>
                  <span> x {item.quantity}</span>
                  <span> : ${item.price} p/u</span>
                </li>
              </div>
              
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
      )}

      {total === 0 ? (
        <div style={btnStyle}>
          <Link to="/">
            <Button content="HOME" size="big" color="yellow" />
          </Link>
        </div>
      ) : (
        <div>

          <h2>Total to pay ${total}</h2>

          <div style={btnStyle}>
            <Link to="/checkout">
              <Button content="PAY" size="big" color="yellow"/>
            </Link>
            
            <Button
              onClick={() => clear()}
              content="CLEAN"
              size="big"
              color="yellow"
            />
          </div>
        </div>
        
      )}

    </div>
  );
}

export default Cart;
