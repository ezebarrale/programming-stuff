import React, { useContext } from "react";
import { Image, Grid, Segment } from "semantic-ui-react";

import ItemCount from "../ItemCount/ItemCount.js";
import { CartContext } from "../../context/CartContext.js";

import "./ItemDetail.css";

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
    <Segment placeholder inverted className="seg-place">
      
        {Object.keys(data).length === 0? (
          <code className="non-product">Product doesn't exist</code>
        ):(
          <div>

          <Grid columns={2} relaxed="very" stackable className="grid">
            <Grid.Column className="img-clm">
              <Image className="img" src={data.img} wrapped ui={true} />
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
          
        </div>
        )}
        

    </Segment>
  );
};

export default ItemDetail;
