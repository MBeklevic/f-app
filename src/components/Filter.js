import React, { useContext } from "react";
import "../styles/Filter.css";
import UVector from "../assets/UVector.svg";
import DVector from "../assets/DVector.svg";

import { useDispatch, useSelector } from "react-redux";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { setMyCardsFilterRangeValue } from "../features/filterRangeSlice";
import {
  setMyCardsFilterDisplay,
  setMyCardsTypeFilter,
  setMyCardsPositionFilter,
} from "../features/myCardsFilterSlice";

function Filter({ cardsFeatures }) {
  const dispatch = useDispatch();
  const { myCards } = useSelector((state) => state.card);
  const { myCardsFilterRangeValue } = useSelector((state) => state.filterRange);
  const { myCardsFilterDisplay, myCardsTypeFilter, myCardsPositionFilter } =
    useSelector((state) => state.myCardsFilter);

  const changeMyCardsFilterRange = (range) => {
    dispatch(
      setMyCardsFilterRangeValue({
        myCardsRangeMin: range[0],
        myCardsRangeMax: range[1],
      })
    );
  };

  const changeMyCardsDisplayOps = (id) => {
    dispatch(setMyCardsFilterDisplay(id));
  };

  const { filterGold, filterSilver, filterBronze } = myCardsTypeFilter;
  const { filterGoalkeeper, filterDefender, filterMidfielder, filterForward } =
    myCardsPositionFilter;
  const myCardsPrices = myCards.map((card) => card.price);
  const myCardsMaxPrice = Math.max(...myCardsPrices);
  const {
    goldNum,
    silverNum,
    bronzeNum,
    goalKeeperNum,
    defenderNum,
    midfielderNum,
    forwardNum,
  } = cardsFeatures;
  return (
    <div className="Filter">
      <div className="Filter-Info">
        <div
          className="Filter-Header"
          id="myCardsCardType"
          onClick={(e) => changeMyCardsDisplayOps(e.target.id)}
        >
          <h4 id="myCardsCardType">Card Type </h4>
          {myCardsFilterDisplay.myCardsCardType ? (
            <img id="myCardsCardType" alt="UVector" src={UVector} />
          ) : (
            <img id="myCardsCardType" alt="DVector" src={DVector} />
          )}
        </div>
        <div
          style={{ display: !myCardsFilterDisplay.myCardsCardType && "none" }}
        >
          <p
            onClick={() =>
              dispatch(
                setMyCardsTypeFilter({
                  filterSilver: filterSilver,
                  filterBronze: filterBronze,
                  filterGold: !filterGold,
                })
              )
            }
            style={{ textDecoration: !filterGold && "line-through" }}
          >
            Gold ({goldNum})
          </p>
          <p
            onClick={() =>
              dispatch(
                setMyCardsTypeFilter({
                  filterBronze: filterBronze,
                  filterGold: filterGold,
                  filterSilver: !filterSilver,
                })
              )
            }
            style={{ textDecoration: !filterSilver && "line-through" }}
          >
            Silver ({silverNum})
          </p>
          <p
            onClick={() =>
              dispatch(
                setMyCardsTypeFilter({
                  filterBronze: !filterBronze,
                  filterGold: filterGold,
                  filterSilver: filterSilver,
                })
              )
            }
            style={{ textDecoration: !filterBronze && "line-through" }}
          >
            Bronze ({bronzeNum})
          </p>
        </div>
      </div>
      <div className="Filter-Line"></div>
      <div className="Filter-Info">
        <div
          id="myCardsPosition"
          className="Filter-Header"
          onClick={(e) => changeMyCardsDisplayOps(e.target.id)}
        >
          <h4 id="myCardsPosition">Position</h4>
          {myCardsFilterDisplay.myCardsPosition ? (
            <img id="myCardsPosition" alt="UVector" src={UVector} />
          ) : (
            <img id="myCardsPosition" alt="DVector" src={DVector} />
          )}
        </div>
        <div
          style={{ display: !myCardsFilterDisplay.myCardsPosition && "none" }}
        >
          <p
            onClick={() =>
              dispatch(
                setMyCardsPositionFilter({
                  filterDefender: filterDefender,
                  filterMidfielder: filterMidfielder,
                  filterForward: filterForward,
                  filterGoalkeeper: !filterGoalkeeper,
                })
              )
            }
            style={{ textDecoration: !filterGoalkeeper && "line-through" }}
          >
            Goalkeeper ({goalKeeperNum})
          </p>
          <p
            onClick={() =>
              dispatch(
                setMyCardsPositionFilter({
                  filterDefender: !filterDefender,
                  filterMidfielder: filterMidfielder,
                  filterForward: filterForward,
                  filterGoalkeeper: filterGoalkeeper,
                })
              )
            }
            style={{ textDecoration: !filterDefender && "line-through" }}
          >
            Defender ({defenderNum})
          </p>
          <p
            onClick={() =>
              dispatch(
                setMyCardsPositionFilter({
                  filterDefender: filterDefender,
                  filterMidfielder: !filterMidfielder,
                  filterForward: filterForward,
                  filterGoalkeeper: filterGoalkeeper,
                })
              )
            }
            style={{ textDecoration: !filterMidfielder && "line-through" }}
          >
            Midfielder ({midfielderNum})
          </p>
          <p
            onClick={() =>
              dispatch(
                setMyCardsPositionFilter({
                  filterDefender: myCardsPositionFilter.filterDefender,
                  filterMidfielder: myCardsPositionFilter.filterMidfielder,
                  filterForward: !myCardsPositionFilter.filterForward,
                  filterGoalkeeper: myCardsPositionFilter.filterGoalkeeper,
                })
              )
            }
            style={{ textDecoration: !filterForward && "line-through" }}
          >
            Forward ({forwardNum})
          </p>
        </div>
      </div>
      <div className="Filter-Line"></div>
      <div className="Filter-Info">
        <div
          id="myCardsPrice"
          className="Filter-Header"
          onClick={(e) => changeMyCardsDisplayOps(e.target.id)}
        >
          <h4 id="myCardsPrice">Price</h4>
          {myCardsFilterDisplay.myCardsPrice ? (
            <img id="myCardsPrice" alt="UVector" src={UVector} />
          ) : (
            <img id="myCardsPrice" alt="DVector" src={DVector} />
          )}
        </div>
        <div
          style={{
            display: !myCardsFilterDisplay.myCardsPrice && "none",
          }}
        >
          <div className="Filter-Prices">
            <p>€ {myCardsFilterRangeValue.myCardsRangeMin.toFixed(2)}</p>
            <p>€ {myCardsFilterRangeValue.myCardsRangeMax.toFixed(2)}</p>
          </div>
          {localStorage.getItem("myCards") && (
            <RangeSlider
              id="Filter-RangeSlider"
              min={0}
              max={myCardsMaxPrice}
              step={1}
              value={[
                myCardsFilterRangeValue.myCardsRangeMin.toFixed(2) ?? 0,
                myCardsFilterRangeValue.myCardsRangeMax.toFixed(2) ?? 30,
              ]}
              onInput={(value) => changeMyCardsFilterRange(value)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Filter;
