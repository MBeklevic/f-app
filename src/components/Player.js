import React, { useContext } from "react";
import "../styles/Player.css";
import CloseIcon from "../assets/CloseIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { hideCardDetails } from "../features/playerCardDisplaySlice";
import { setTradeModal } from "../features/tradeModalSlice";
import { setRejection } from "../features/rejectionSlice";

function Player() {
  const dispatch = useDispatch();
  const { myCards, wallet } = useSelector((state) => state.card);
  const { playerInfo } = useSelector((state) => state.playerInfo);
  const { playerCardDisplay } = useSelector((state) => state.playerCardDisplay);

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

  const player = playerInfo;
  const myCardsIds = myCards.map((card) => card.id);

  // Instead of pulling data from endpoint, it is possible to pull the data from exsiting cards:

  // const allCards = myCards.concat(marketCards);
  // const [player] = allCards.filter(
  //   (card) => playerCardDisplay.playerCardId == card.id
  // );

  const tradeType = player && myCardsIds.includes(player.id) ? "Sell" : "Buy";
  return (
    <>
      {playerCardDisplay.isPlayerCard && player && (
        <div className="Player" onClick={() => dispatch(hideCardDetails())}>
          <div className="Player-Content" onClick={(e) => e.stopPropagation()}>
            <div className="Player-ImgArea">
              <img alt={player.name} src={player.photoUrl} />
              <div
                className="Player-CloseIcon"
                onClick={() => dispatch(hideCardDetails())}
              >
                <img alt="closeIcon" src={CloseIcon} />
              </div>
            </div>
            <div className="Player-Info">
              <div className="Player-PrimaryInfo">
                <div className="Player-Name">
                  <p>{player.name}</p> <span>{player.position}</span>
                </div>
                <div className="Player-Marketing">
                  <p className="Player-Price">
                    € {player.price && player.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() =>
                      setTradeModalOn(
                        player.price,
                        tradeType.toLowerCase(),
                        player
                      )
                    }
                  >
                    {tradeType}
                  </button>
                </div>
              </div>
              <div className="Player-Attributes">
                <h1>ATTRIBUTES</h1>
                <div className="Player-AttributesArea">
                  <div className="Player-Attribute">
                    <h4>Pace</h4>
                    <p>
                      <span>{player.attributes.pace}</span>
                      /100
                    </p>
                  </div>
                  <div className="Player-Attribute">
                    <h4>Shooting</h4>
                    <p>
                      <span>{player.attributes.shooting}</span>/100
                    </p>
                  </div>
                  <div className="Player-Attribute">
                    <h4>Passing</h4>
                    <p>
                      <span>{player.attributes.passing}</span>/100
                    </p>
                  </div>
                  <div className="Player-Attribute">
                    <h4>Dribbling</h4>
                    <p>
                      <span>{player.attributes.dribbling}</span>/100
                    </p>
                  </div>
                  <div className="Player-Attribute">
                    <h4>Defending</h4>
                    <p>
                      <span>{player.attributes.defending}</span>/100
                    </p>
                  </div>
                  <div className="Player-Attribute">
                    <h4>Physical</h4>
                    <p>
                      <span>{player.attributes.physical}</span>/100
                    </p>
                  </div>
                </div>
              </div>
              <div className="Player-SecondaryInfo">
                <div className="Player-Team">
                  <span>Team</span>
                  <h1>{player.team}</h1>
                </div>
                <div className="Player-CardType">
                  <span>Card Type</span>
                  <h1>{player.cardType}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Player;
