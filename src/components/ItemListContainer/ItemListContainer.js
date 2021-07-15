import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.js";

import { db } from "../../Firebase";

const itemListcardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  marginLeft: "60px",
  marginRight: "60px",
};

function ItemListContainer({ mtch }) {
  const catId = mtch.params.categoryId;

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      let response
      (catId === undefined) ? response = await db.collection('articles').get() : response = await db.collection('articles').where('categories','==',catId).get()
      setArticles(response.docs.map(item =>({ id: item.id, ...item.data()})))
    })()
  }, [catId]);

  /*
  useEffect(() => {
      fetch(
        catId === undefined ? "https://60d67598307c300017a5f3e4.mockapi.io/api/articles" : `https://60d67598307c300017a5f3e4.mockapi.io/api/articles?categories=${catId}`
        )
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [catId]);
  */

  return (
    <div style={itemListcardStyles} className="listContainer">
      <h2>
        <code>Trending now ...</code>
      </h2>
      <ItemList products={articles} />
    </div>
  );
}

export default ItemListContainer;
