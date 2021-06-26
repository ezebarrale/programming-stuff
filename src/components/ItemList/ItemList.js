import React, { useState, useEffect } from "react";
import Item from "../Item/Item.js";

const listStyles = {
  display: "flex",
  justifyContent: "center"
};

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://60d67598307c300017a5f3e4.mockapi.io/api/articles")
        .then((response) => response.json())
        .then((json) => setItems(json));
    }, 2000);
  });

  return (
    <div style={listStyles} className="item-list">
      {items.map((item, idx) => {
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
