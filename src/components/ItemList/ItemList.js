import React from "react";
import Item from "../Item/Item.js";

const listStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
};

function ItemList({products}) {
  return (
    <div style={listStyles} className="itemList">
      {products.map((item) => {
        return (
          <Item
            key={item.id}
            title={item.title}
            price={"$" + item.price}
            img={item.img}
            max={item.max}
            min={item.min}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
