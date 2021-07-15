import { createContext, useState } from "react";

import { db } from "../Firebase.js";

export const ItemContext = createContext({});

export const ItemProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  //console.log(articles);

  const getArticles = () => {
    const docs = [];
    db.collection("articles").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        //console.log(doc.data());
        //console.log(doc.id);
        docs.push({ ...doc.data(), id: doc.id });
        //console.log(docs);
      });
      setArticles(docs);
    });
  };
/*
  useEffect(() => {
    getArticles();
  }, []);
*/
  //console.log(articles);

  return (
    <ItemContext.Provider value={{ articles, getArticles }}>{children}</ItemContext.Provider>
  );
};
