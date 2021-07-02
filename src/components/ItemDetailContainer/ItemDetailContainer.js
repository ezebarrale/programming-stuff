import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import axios from "axios";

function ItemDetailContainer({ mtch }) {
  let itemId = mtch.params.id;
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios(
      `https://60d67598307c300017a5f3e4.mockapi.io/api/articles/${itemId}`
    ).then((res) => setItems(res.data));
  }, [itemId]);

  return <ItemDetail data={items} />;
}

export default ItemDetailContainer;
