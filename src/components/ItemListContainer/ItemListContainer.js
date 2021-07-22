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

  return (
    <div style={itemListcardStyles} className="listContainer">
      <h1>
        <code>Trending now ...</code>
      </h1>
      <ItemList products={articles} />
    </div>
  );
}

export default ItemListContainer;
