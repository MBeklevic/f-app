import React from "react";
import FilterMarket from "./FilterMarket";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Market.css";
import RVectorg from "../assets/RVector-g.svg";
import Card from "./Card";
import {
  setMarketCardsPagination,
  increaseMarketCardsPagination,
} from "../features/paginationSlice";

function Market() {
  const dispatch = useDispatch();
  const { marketCards } = useSelector((state) => state.card);
  const { marketCardsFilterRangeValue } = useSelector(
    (state) => state.filterRange
  );
  const { marketCardsTypeFilter, marketCardsPositionFilter } = useSelector(
    (state) => state.marketCardsFilter
  );
  const { marketCardsPagination } = useSelector((state) => state.pagination);

  const { filterGold, filterSilver, filterBronze } = marketCardsTypeFilter;
  const { filterGoalkeeper, filterDefender, filterMidfielder, filterForward } =
    marketCardsPositionFilter;
  const rangeMin = marketCardsFilterRangeValue.marketCardsRangeMin;
  const rangeMax = marketCardsFilterRangeValue.marketCardsRangeMax;
  const rangeFilteredCards = marketCards.filter(
    (card) => card.price >= rangeMin && card.price <= rangeMax
  );

  const typeFilteredCards = rangeFilteredCards
    .filter((card) =>
      filterGold
        ? card.cardType === "Gold" ||
          card.cardType === "Silver" ||
          card.cardType === "Bronze"
        : card.cardType === "Silver" || card.cardType === "Bronze"
    )
    .filter((card) =>
      filterSilver
        ? card.cardType === "Silver" ||
          card.cardType === "Bronze" ||
          card.cardType === "Gold"
        : card.cardType === "Gold" || card.cardType === "Bronze"
    )
    .filter((card) =>
      filterBronze
        ? card.cardType === "Silver" ||
          card.cardType === "Bronze" ||
          card.cardType === "Gold"
        : card.cardType !== "Bronze"
    );

  const cardsToDisplay = typeFilteredCards
    .filter((card) =>
      filterGoalkeeper
        ? card.position === "Goalkeeper" ||
          card.position === "Defender" ||
          card.position === "Midfielder" ||
          card.position === "Forward"
        : card.position === "Defender" ||
          card.position === "Midfielder" ||
          card.position === "Forward"
    )
    .filter((card) =>
      filterDefender
        ? card.position === "Goalkeeper" ||
          card.position === "Defender" ||
          card.position === "Midfielder" ||
          card.position === "Forward"
        : card.position === "Goalkeeper" ||
          card.position === "Midfielder" ||
          card.position === "Forward"
    )
    .filter((card) =>
      filterMidfielder
        ? card.position === "Goalkeeper" ||
          card.position === "Defender" ||
          card.position === "Midfielder" ||
          card.position === "Forward"
        : card.position === "Goalkeeper" ||
          card.position === "Defender" ||
          card.position === "Forward"
    )
    .filter((card) =>
      filterForward
        ? card.position === "Goalkeeper" ||
          card.position === "Defender" ||
          card.position === "Midfielder" ||
          card.position === "Forward"
        : card.position === "Goalkeeper" ||
          card.position === "Defender" ||
          card.position === "Midfielder"
    );

  const numOfPages = Math.ceil(cardsToDisplay.length / 10);
  let pages = [];
  for (let i = 1; i < numOfPages + 1; i++) {
    pages.push(cardsToDisplay.slice((i - 1) * 10, i * 10));
  }
  const cardsFeatures = {
    goldNum: cardsToDisplay.filter((card) => card.cardType === "Gold").length,
    silverNum: cardsToDisplay.filter((card) => card.cardType === "Silver")
      .length,
    bronzeNum: cardsToDisplay.filter((card) => card.cardType === "Bronze")
      .length,
    goalKeeperNum: cardsToDisplay.filter(
      (card) => card.position === "Goalkeeper"
    ).length,
    defenderNum: cardsToDisplay.filter((card) => card.position === "Defender")
      .length,
    midfielderNum: cardsToDisplay.filter(
      (card) => card.position === "Midfielder"
    ).length,
    forwardNum: cardsToDisplay.filter((card) => card.position === "Forward")
      .length,
  };

  return (
    <div id="marketCards" className="MarketCards">
      <h1>MARKET</h1>
      <div className="MarketCards-content">
        <FilterMarket cardsFeatures={cardsFeatures} numOfPages={numOfPages} />
        <div className="MarketCards-cardsContainer">
          {pages.length > 0 &&
            pages[marketCardsPagination - 1].map((card) => (
              <Card
                card={card}
                id={card.id}
                key={card.id}
                name={card.name}
                photoUrl={card.photoUrl}
                price={card.price}
                isMyCard={false}
              />
            ))}
        </div>
      </div>
      <div className="MarketCards-Pages">
        {[...Array(numOfPages)].map((e, i) => (
          <div
            style={{
              backgroundColor: marketCardsPagination - 1 === i && "#E8282B",
            }}
            className="MarketCards-Page"
            onClick={(e) =>
              dispatch(setMarketCardsPagination(Number(e.target.innerText)))
            }
            key={i + 1}
          >
            {i + 1}
          </div>
        ))}
        <img
          onClick={(e) => dispatch(increaseMarketCardsPagination())}
          alt="RVector"
          src={RVectorg}
        />
      </div>
    </div>
  );
}

export default Market;
