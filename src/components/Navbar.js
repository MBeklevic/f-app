import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/LogoType.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <div>
        <a href="#">
          <img alt="Logo" src={logo} />
        </a>
      </div>
      <a href="#myCards">
        <p>MY CARDS</p>
      </a>
      <a href="#marketCards">
        <p>MARKET</p>
      </a>
    </div>
  );
}

export default Navbar;
