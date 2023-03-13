import React from "react";
import "../styles/TradeModal.css";
import { useDispatch, useSelector } from "react-redux";
import { cancelTradeModal } from "../features/tradeModalSlice";
import {
  addToWallet,
  addToMyCards,
  addToMarketCards,
  subtractFromWallet,
  removeFromMarketCards,
  removeFromMyCards,
} from "../features/cardSlice";

function TradeModal() {
  const dispatch = useDispatch();
  const { tradeModal } = useSelector((state) => state.tradeModal);

  const trade = (card, type) => {
    if (type === "buy") {
      dispatch(subtractFromWallet(card.price));
      dispatch(addToMyCards(card));
      dispatch(removeFromMarketCards(card.id));
      dispatch(cancelTradeModal());
    } else {
      dispatch(addToWallet(card.price));
      dispatch(removeFromMyCards(card.id));
      dispatch(addToMarketCards(card));
      dispatch(cancelTradeModal());
    }
  };

  // , trade } = useContext(Context);
  return (
    <>
      {tradeModal.tradeModalDisplay && (
        <div
          className="TradeModal"
          onClick={() => dispatch(cancelTradeModal())}
        >
          <div
            className="TradeModal-Content"
            onClick={(e) => e.stopPropagation()}
          >
            <p>
              Would you like to <span>{tradeModal.tradeType}</span> the card for
              <span className="TradeModal-Price">
                {" "}
                € {tradeModal.tradePrice.toFixed(2)}
              </span>
            </p>
            <button
              onClick={() =>
                trade(
                  tradeModal.tradingCard,
                  tradeModal.tradeType.toLowerCase()
                )
              }
            >
              {tradeModal.tradeType.charAt(0).toUpperCase() +
                tradeModal.tradeType.slice(1)}
            </button>
            <div
              className="TradeModal-Cancel"
              onClick={() => dispatch(cancelTradeModal())}
            >
              Cancel
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TradeModal;
