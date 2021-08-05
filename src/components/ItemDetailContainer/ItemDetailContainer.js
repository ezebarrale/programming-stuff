import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
//import axios from "axios";

import Spinner from "../Spinner/Spinner.js";

import { db } from "../../Firebase";

import "./ItemDetailContainer.css";


const ItemDetailContainer = ({ mtch }) => {
  const itemId = mtch.params.id;
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      await db.collection('articles').doc(itemId).get().then((doc)=>{
        if(doc.exists){
          //console.log("El articulo existe");
          setItems({ id: doc.id, ...doc.data() });
        }else{
          //console.log("El articulo no existe");
          setItems({});
        }
      });
      //const response = await db.collection('articles').doc(itemId).get();
      //console.log(response.id , response.data());
      //setItems({ id: response.id, ...response.data() });
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
  return(

      <div className="itm-dtl-cont">
        {isLoading ? <Spinner /> : <ItemDetail data={items} />}
      </div>
      
    ) 
};

export default ItemDetailContainer;
