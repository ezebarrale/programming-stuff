import React, { useState } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import "./Item.css";

const cardStyles = {
  textAlign: "center",
  fontSize: 20,
  padding: 5
};

function Item({ max, min, img, title, price }) {
  const [number, setNumber] = useState(0);

  const hundleIncrement = () => {
    //console.log("Hiciste click");
    if (number < max) setNumber(number + 1);
  };

  const hundleDecrement = () => {
    //console.log("Hiciste click");
    if (number > min) setNumber(number - 1);
  };

  return (
    <div className="ProductCard">
      <Card style={cardStyles}>
        <Image src={img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span className="price">{price}</span>
          </Card.Meta>
          <Card.Description></Card.Description>
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
          <Button
            variant="outlined"
            size="large"
            color="red"
          >
            Agregar al carrito
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Item;
