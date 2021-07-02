import img from "../../shopping-cart.png";
import React from "react";
import { Button } from "semantic-ui-react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header-container">
      <Link className="title" to="/">
        <h1 className="title" id="title1">
          {props.title1}{" "}
        </h1>
        <h1 className="title" id="title2">
          {props.title2}
        </h1>
      </Link>
      <div className="nav_bar">
        <ul>
          <li>
            <Link to="#">
              <p>ABOUT</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p>BLOG</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p>CATEGORIES</p>
            </Link>
            <ul className="DropDown">
              <Link to="/categories/1">
                <p>T-SHIRT</p>
              </Link>
              <Link to="/categories/2">
                <p>HOODIE</p>
              </Link>
              <Link to="/categories/3">
                <p>OTHERS</p>
              </Link>
            </ul>
          </li>
        </ul>

        <div className="btnCart">
          <Button variant="outlined" size="large" color="yellow">
            <img className="header-img" src={img} alt="cart" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
