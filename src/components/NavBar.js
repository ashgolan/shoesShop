import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../images/logo.png";
import addShoe from "../images/addShoe.png";
export default function NavBar() {
  return (
    <ul className="nav-bar-container">
      <li>
        <Link to={"/"}>
          <img className="logo" src={logo}></img>
        </Link>
      </li>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/About"}>About</Link>
      </li>
      <li>
        <Link to={"/ContactUs"}>Contact-us</Link>
      </li>
      <li>
        <Link to={"/AddShoe"}>
          <img style={{ width: "20%" }} src={addShoe}></img>
        </Link>
      </li>
    </ul>
  );
}
