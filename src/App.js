import React from "react";
import "./App.css";
//COMPONENTS
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home/Home.js';
import ItemDetail from './pages/ItemDetail/ItemDetail.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header title1={"Programming"} title2={"Stuff"} />
        
        <Switch>
					<Route path='/' exact component={Home} />
          <Route path='/item/:id' component={ItemDetail} />
          <Route path='/category/:categoryId' component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
