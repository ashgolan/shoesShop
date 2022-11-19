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
          <img className="logo" src={logo} alt={logo}></img>
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

      <Link style={{ width: "10%" }} to={"/AddShoe"}>
        <img className="add" src={addShoe} alt={addShoe}></img>
      </Link>
    </ul>
  );
}
