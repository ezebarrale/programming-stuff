import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import axios from "axios";

function ItemDetailContainer({ mtch }) {
  const itemId = mtch.params.id;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      axios(
        `https://60d67598307c300017a5f3e4.mockapi.io/api/articles/${itemId}`
      ).then((res) => setItems(res.data));
      setLoading(false);
  }, [itemId]);

  if (loading) return <h1>Loading ...</h1>

  return <ItemDetail data={items} />
}

export default ItemDetailContainer;
