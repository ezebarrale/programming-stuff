import React from "react";
import "./App.css";

//COMPONENTS
import Header from './components/Header/Header.js';
import HomeJSX from "./components/HomeJSX/HomeJSX";

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Header
          title1={"Programming"}
          title2={"Stuff"}
        />
        <HomeJSX
          greetings={"Welcome user"}
        />
      </div>
    )
  }
}

export default App;
