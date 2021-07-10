import React, { useContext } from "react";
import { Divider, Image, Grid, Segment } from "semantic-ui-react";

import ItemCount from "../ItemCount/ItemCount.js";
import { CartContext } from "../../context/CartContext.js";

const cardStyles = {
  fontSize: 20,
  padding: 20,
};

const btnCartStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const ItemDetail = ({ data }) => {
  const {addToCart } = useContext(CartContext);
  const onAdd = qty => addToCart(data, qty);

  return (
    <Segment placeholder inverted>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <Image width="500px" src={data.img} wrapped ui={true} />
        </Grid.Column>

        <Grid.Column verticalAlign="middle">
          <div className="Gheader" style={cardStyles}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
          <div className="Gprice" style={cardStyles}>
            <span>$ {data.price}</span>
          </div>

          <div style={btnCartStyles}>
            {data.stock > 0 && <ItemCount stock={data.stock} onAdd={onAdd} />}  
          </div>
          
        </Grid.Column>
      </Grid>

      <Divider vertical></Divider>
    </Segment>
  );
};

export default ItemDetail;
