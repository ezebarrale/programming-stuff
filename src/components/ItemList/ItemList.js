import React from "react";
import Item from "../Item/Item.js";

//import { Link } from "react-router-dom";

const listStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  marginTop: "40px",
};

function ItemList({ products }) {
  return (
    <div style={listStyles} className="itemList">
      {" "}
      {products.map((item) => {
        return (
          <div key={item.id}>
            <Item data={item} />
          </div>
        );
      })}{" "}
    </div>
  );
}

export default ItemList;
