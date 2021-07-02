import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.js";


const itemListcardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  marginLeft: "60px",
  marginRight: "60px"
};

function ItemListContainer({ mtch }) {

  let catId = mtch.params.categoryId;

  const [items, setItems] = useState([]);
  //(catId === undefined) ? console.log("categoria id sin definir ") : console.log("categoria id: "+ catId);

  useEffect(() => {
    if(catId === undefined){
      fetch("https://60d67598307c300017a5f3e4.mockapi.io/api/articles")
      .then((response) => response.json())
      .then((json) => setItems(json));
    }else{
      fetch(`https://60d67598307c300017a5f3e4.mockapi.io/api/articles?category=${catId}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    }  
  }, [catId]);
  
  //useEffect(() => {
  //  fetch("https://60d67598307c300017a5f3e4.mockapi.io/api/articles")
  //    .then((response) => response.json())
  //    .then((json) => setItems(json));
  //}, []);

  return (
    <div style={itemListcardStyles} className="listContainer">
      <h2> <code>Trending now ...</code> </h2>
      <ItemList products ={items}/>
    </div>
  );
}

export default ItemListContainer;
