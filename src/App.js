import React from "react";
import "./App.css";
//COMPONENTS
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";

function App() {
  return (
    <div>
      <div className="App">
        <Header title1={"Programming"} title2={"Stuff"} />
        
        <h2> <code>Trending now ...</code> </h2>
        <ItemListContainer />
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
