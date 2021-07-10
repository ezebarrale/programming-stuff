import img from "../../shopping-cart.png";
import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import "./Header.css";
import { Link } from "react-router-dom";
import {CartContext} from '../../context/CartContext';

function Header(props) {

  const {cart} = useContext(CartContext);

  const total = cart.length;

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
              <Link to="/categories/t-shirt">
                <p>T-SHIRT</p>
              </Link>
              <Link to="/categories/hoodie">
                <p>HOODIE</p>
              </Link>
              <Link to="/categories/others">
                <p>OTHERS</p>
              </Link>
            </ul>
          </li>
        </ul>

        <Link to="/cart" className="btnCart">
          <Button variant="outlined" size="large" color="yellow">
            <img className="header-img" src={img} alt="cart" />
            <span style={{color: "black"}}>{total}</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
