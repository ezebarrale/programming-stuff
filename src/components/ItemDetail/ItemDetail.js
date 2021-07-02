import React from "react";
import { Button, Divider, Image, Grid, Segment } from "semantic-ui-react";

const cardStyles = {
  fontSize: 20,
  padding: 20
};

const ItemDetail = ({data}) => (
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
        <Button content="Add to cart" icon="cart" size="big" />
      </Grid.Column>
    </Grid>

    <Divider vertical></Divider>
  </Segment>
);

export default ItemDetail;
