import React from "react";
import Filter from "./Filter";
import "../styles/MyCards.css";
import RVectorg from "../assets/RVector-g.svg";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import {
  setMyCardsNumOfPage,
  setMyCardsPagination,
  increaseMyCardsPagination,
} from "../features/paginationSlice";

function MyCards() {
  const dispatch = useDispatch();
  const { myCards } = useSelector((state) => state.card);
  const { myCardsFilterRangeValue } = useSelector((state) => state.filterRange);
  const { myCardsTypeFilter, myCardsPositionFilter } = useSelector(
    (state) => state.myCardsFilter
  );
  const { myCardsPagination } = useSelector((state) => state.pagination);

  const rangeMin = myCardsFilterRangeValue.myCardsRangeMin;
  const rangeMax = myCardsFilterRangeValue.myCardsRangeMax;
  const rangeFilteredCards = myCards.filter(
    (card) => card.price >= rangeMin && card.price <= rangeMax
  );
  const { filterGold, filterSilver, filterBronze } = myCardsTypeFilter;
  const { filterGoalkeeper, filterDefender, filterMidfielder, filterForward } =
    myCardsPositionFilter;

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
  const overFive = myCards.length > 5;

  return (
    <div
      className={overFive ? "MyCards MyCards-overFive" : "MyCards"}
      id="myCards"
    >
      <h1>MY CARDS</h1>
      <div
        className={
          overFive
            ? "MyCards-content MyCards-content-overFive"
            : "MyCards-content"
        }
      >
        <Filter cardsFeatures={cardsFeatures} />
        <div className="MyCards-cardsContainer">
          {pages.length > 0 &&
            pages[myCardsPagination - 1].map((card) => (
              <Card
                card={card}
                id={card.id}
                key={card.id}
                name={card.name}
                photoUrl={card.photoUrl}
                price={card.price}
                isMyCard={true}
              />
            ))}
        </div>
      </div>
      <div className="MyCards-Pages">
        {[...Array(numOfPages)].map((e, i) => (
          <div
            style={{
              backgroundColor: myCardsPagination - 1 === i && "#E8282B",
            }}
            className="MyCards-Page"
            onClick={(e) =>
              dispatch(setMyCardsPagination(Number(e.target.innerText)))
            }
            key={i + 1}
          >
            {i + 1}
          </div>
        ))}
        <img
          onClick={(e) => {
            dispatch(setMyCardsNumOfPage(pages.length));
            dispatch(increaseMyCardsPagination());
          }}
          alt="RVector"
          src={RVectorg}
        />
      </div>
    </div>
  );
}
export default MyCards;
