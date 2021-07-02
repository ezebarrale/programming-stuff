import React, { useState } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import "./Item.css";

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
  const [number, setNumber] = useState(0);

  const hundleIncrement = () => {
    //console.log("Hiciste click");
    if (number < data.max) setNumber(number + 1);
  };

  const hundleDecrement = () => {
    //console.log("Hiciste click");
    if (number > data.min) setNumber(number - 1);
  };

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
            <div className="ContadorContainer">
              <Button size="small" onClick={hundleDecrement}>
                <p className="less-plus"> - </p>
              </Button>
              <p className="Contador">{number}</p>
              <Button size="small" onClick={hundleIncrement}>
                <p className="less-plus"> + </p>
              </Button>
            </div>
          </Card.Content>
          <Card.Content>
            <Button variant="outlined" size="large" color="yellow">
              Add to cart
            </Button>
          </Card.Content>
        </Card>
    </div>
  );
}

export default Item;
