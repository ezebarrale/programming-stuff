import React, {useContext} from 'react';
import { CartContext } from "../../context/CartContext";
import { Button } from "semantic-ui-react";

const CheckOutConfirm = ({ addPurchase }) => {

    const { cart } = useContext(CartContext);

    const total = cart.reduce((ctotal, item) => {
        return item.price * item.quantity + ctotal;
      }, 0);

    return (
        <div className="confirm-checkout">
            <h1> <code>Confirm the purchase of the following products:</code> </h1>
            
            <ul className="ulStyleConfirm">
                {cart.map((item) => {
                return (
                    <div key={item.id}>
                        <li className="listStyleConfirm">
                            <span>{item.title}</span>
                            <span> x {item.quantity}</span>
                            <span> : ${item.price} p/u</span>
                        </li>
                    </div>
                    );
                })}
            </ul>

            <h2>TOTAL: ${total}</h2>

            <Button
                size="big"
                color="yellow"
                content="CONFIRM PURCHASE"
                onClick={() => addPurchase()}
            />
        </div>
    )
}

export default CheckOutConfirm
