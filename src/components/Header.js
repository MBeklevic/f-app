import React from "react";
import Navbar from "./Navbar";
import Wallet from "./Wallet";
import "../styles/Header.css";

function Header() {
  return (
    <div className="Header">
      <Navbar />
      <Wallet />
    </div>
  );
}

export default Header;
