import React, { useContext } from "react";
import "../styles/Wallet.css";
import { useSelector } from "react-redux";
import walletsvg from "../assets/Wallet.svg";

function Wallet() {
  const { wallet } = useSelector((state) => state.card);

  return (
    <div className="Wallet">
      <div className="Wallet-imgArea">
        <img alt="Wallet" src={walletsvg} />
      </div>
      <div className="Wallet-value">€ {wallet.toFixed(2)}</div>
    </div>
  );
}

export default Wallet;
