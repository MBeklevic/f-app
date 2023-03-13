import React from "react";
import "../styles/Card.css";
import { useDispatch, useSelector } from "react-redux";
import { getPlayerInfo } from "../features/playerInfoSlice";
import { setPlayerCardDisplay } from "../features/playerCardDisplaySlice";
import { setTradeModal } from "../features/tradeModalSlice";
import { setRejection } from "../features/rejectionSlice";

function Card({ name, photoUrl, price, isMyCard, id, card }) {
  const dispatch = useDispatch();
  const { wallet } = useSelector((state) => state.card);
  // const { displayCardDetails, setTradeModalOn } = useContext(Context);

  // const displayCardDetails = (id) => {
  //   getPlayerInfo(id);
  //   setPlayerCardDisplay({
  //     playerCardId: id,
  //     isPlayerCard: true,
  //   });
  // };

  const displayCardDetails = (id) => {
    dispatch(getPlayerInfo(id));
    dispatch(
      setPlayerCardDisplay({
        playerCardId: id,
        isPlayerCard: true,
      })
    );
  };

  const setTradeModalOn = (price, type, card) => {
    if (price >= wallet && type.toLowerCase() === "buy") {
      dispatch(setRejection(true));
    } else {
      dispatch(
        setTradeModal({
          tradeModalDisplay: true,
          tradeType: type,
          tradePrice: price,
          tradingCard: card,
        })
      );
    }
  };

  const tradeType = isMyCard ? "Sell" : "Buy";
  return (
    <div className="Card" onClick={() => displayCardDetails(id)}>
      <img alt={name} src={photoUrl} />
      <div className="Card-Bottom">
        <div className="Card-Price">€ {price.toFixed(2)}</div>
        <button
          className="Card-Action"
          onClick={(e) => {
            e.stopPropagation();
            setTradeModalOn(price, tradeType.toLowerCase(), card);
          }}
        >
          {tradeType}
        </button>
      </div>
    </div>
  );
}

export default Card;
