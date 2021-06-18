import React from "react";
import { Card, Image } from "semantic-ui-react";

const CardComponent = ({ greetings }) => (
  <div className="card_cont">
    <Card>
      <Card.Content>
        <Card.Header>{greetings}</Card.Header>
        <Card.Meta>
          <span className="soon">
            <code>SOON... our products</code>
          </span>
        </Card.Meta>
        <Card.Description>
          <p>Programming Stuff®</p>
          <p>All Rights Reserved.</p>
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
);

export default CardComponent;
