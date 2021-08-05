import React, {useContext} from "react";
import { Card, Image } from "semantic-ui-react";
import ItemCount from '../ItemCount/ItemCount.js';
import "./Item.css";

import { CartContext } from "../../context/CartContext.js";

import { Link } from "react-router-dom";

const cardStyles = {
  textAlign: "center",
  fontSize: 20,
  padding: 10,
};

function Item({ data }) {

  const { addToCart } = useContext(CartContext);
  const onAdd = qty => addToCart(data, qty);

  return (
    <div className="itemCard">
        <Card style={cardStyles}>

        <Link to={`/item/${data.id}`}>
          <div>
            <Image className="img-card" src={data.img} width="250px" wrapped ui={false} />
          </div>
          
          <Card.Content>

            <Card.Header className="header-card">{data.title}</Card.Header>

            <Card.Meta className="price">
              <span>$ {data.price}</span>
            </Card.Meta>
            
          </Card.Content>

        </Link>

          <Card.Content>
            <ItemCount onAdd={onAdd} stock={data.stock}/>
          </Card.Content>
        </Card>
    </div>
  );
}

export default Item;
