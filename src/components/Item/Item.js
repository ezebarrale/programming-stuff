import React, {useContext} from "react";
import { Card, Image } from "semantic-ui-react";
import ItemCount from '../ItemCount/ItemCount.js';
import "./Item.css";

import { CartContext } from "../../context/CartContext.js";

import { Link } from "react-router-dom";

const cardStyles = {
  textAlign: "center",
  fontSize: 20,
  padding: 20,
};

const contentStyles = {
  height: "60px",
  fontSize: "14px"
};

function Item({ data }) {

  const { addToCart } = useContext(CartContext);
  const onAdd = qty => addToCart(data, qty);

  return (
    <div className="itemCard">
        <Card style={cardStyles}>
          
          <Image src={data.img} wrapped ui={false} />
          <Card.Content>
          <Link to={`/item/${data.id}`}>
            <Card.Header style={contentStyles}>{data.title}</Card.Header>
          </Link>
            <Card.Meta>
              <span className="price">$ {data.price}</span>
            </Card.Meta>
          </Card.Content>

          <Card.Content>
            <ItemCount onAdd={onAdd} stock={data.stock}/>
          </Card.Content>
        </Card>
    </div>
  );
}

export default Item;
