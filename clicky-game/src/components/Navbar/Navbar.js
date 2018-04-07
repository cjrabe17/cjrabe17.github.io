import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">Clicky Game</a>
      </li>
      <li>{props.message}</li>
      <li>Score: {props.currentScore} | Top Score: {props.highScore}</li>
    </ul>
  </nav>
);

export default Navbar;