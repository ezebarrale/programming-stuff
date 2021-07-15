import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
//import axios from "axios";

import Spinner from "../Spinner/Spinner.js";

import { db } from "../../Firebase";

const ItemDetailContainer = ({ mtch }) => {
  const itemId = mtch.params.id;
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      const response = await db.collection('articles').doc(itemId).get();
      setItems({ id: response.id, ...response.data() });
      setIsLoading(false);
    })()
  }, [itemId]);
  
  /*
  useEffect(() => {
    axios(
      `https://60d67598307c300017a5f3e4.mockapi.io/api/articles/${itemId}`
    ).then((res) => setItems(res.data));
    setIsLoading(false);
  }, [itemId]);
*/
  return isLoading ? <Spinner /> : <ItemDetail data={items} />;

};

export default ItemDetailContainer;
