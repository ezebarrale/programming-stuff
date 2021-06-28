import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.js";

const itemListcardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  margin: "60px",
};

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://60d67598307c300017a5f3e4.mockapi.io/api/articles")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []); //pasarle un array vacio para que no haga loop la request

  return (
    <div style={itemListcardStyles} className="listContainer">
      <ItemList products ={items}/>
    </div>
  );
}

export default ItemListContainer;
