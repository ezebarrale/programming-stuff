import img from "../../shopping-cart.png";
import React from "react";
import { Button } from "semantic-ui-react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header-container">
      <div className="title">
        <h1 className="title" id="title1">
          {props.title1}{" "}
        </h1>
        <h1 className="title" id="title2">
          {props.title2}{" "}
        </h1>
      </div>
      <div className="nav_bar">
        <ul>
          <li>
            <a href=".">Products</a>
          </li>
          <li>
            <a href=".">About</a>
          </li>
          <li>
            <a href=".">Blog</a>
          </li>
          
        </ul>
        <div className="btnCart">
            <Button variant="outlined" size="large" color="red">
              <img className="header-img" src={img} alt="cart" />
            </Button>
          </div>
      </div>
    </div>
  );
}

export default Header;
