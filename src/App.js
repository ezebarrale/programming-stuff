import React from "react";
import "./App.css";
//COMPONENTS
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home.js";
import ItemDetail from "./pages/ItemDetail/ItemDetail.js";
import Cart from "./pages/Cart/Cart.js";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header title1={"Programming"} title2={"Stuff"} />

          <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/item/:id" component={ItemDetail} />
            <Route path="/categories/:categoryId" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="*">
              {" "}<h1>404 Not Found</h1>{" "}
            </Route>
            
          </Switch>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
