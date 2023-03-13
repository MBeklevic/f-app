import React, { useContext } from "react";
import "../styles/Filter.css";
import UVector from "../assets/UVector.svg";
import DVector from "../assets/DVector.svg";
import { useDispatch, useSelector } from "react-redux";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { setMarketCardsFilterRangeValue } from "../features/filterRangeSlice";
import {
  setMarketCardsFilterDisplay,
  setMarketCardsTypeFilter,
  setMarketCardsPositionFilter,
} from "../features/marketCardsFilterSlice";
import {
  setMarketCardsPagination,
  setMarketCardsNumOfPage,
} from "../features/paginationSlice";

function FilterMarket({ cardsFeatures, numOfPages }) {
  const dispatch = useDispatch();
  const { marketCards } = useSelector((state) => state.card);
  const { marketCardsFilterRangeValue } = useSelector(
    (state) => state.filterRange
  );
  const {
    marketCardsFilterDisplay,
    marketCardsTypeFilter,
    marketCardsPositionFilter,
  } = useSelector((state) => state.marketCardsFilter);

  const changeMarketCardsFilterRange = (range, numOfPages) => {
    dispatch(
      setMarketCardsFilterRangeValue({
        marketCardsRangeMin: range[0],
        marketCardsRangeMax: range[1],
      })
    );
    dispatch(setMarketCardsPagination(1));
    dispatch(setMarketCardsNumOfPage(numOfPages));
  };

  const changeMarketCardsDisplayOps = (id) => {
    dispatch(setMarketCardsFilterDisplay(id));
  };

  const { filterGold, filterSilver, filterBronze } = marketCardsTypeFilter;
  const { filterGoalkeeper, filterDefender, filterMidfielder, filterForward } =
    marketCardsPositionFilter;
  const marketCardsPrices = marketCards.map((card) => card.price);
  const marketCardsMaxPrice = Math.max(...marketCardsPrices);
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
          id="marketCardsCardType"
          onClick={(e) => changeMarketCardsDisplayOps(e.target.id)}
        >
          <h4 id="marketCardsCardType">Card Type </h4>
          {marketCardsFilterDisplay.marketCardsCardType ? (
            <img id="marketCardsCardType" alt="UVector" src={UVector} />
          ) : (
            <img id="marketCardsCardType" alt="DVector" src={DVector} />
          )}
        </div>
        <div
          style={{
            display: !marketCardsFilterDisplay.marketCardsCardType && "none",
          }}
        >
          <p
            onClick={() =>
              dispatch(
                setMarketCardsTypeFilter({
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
                setMarketCardsTypeFilter({
                  filterSilver: !filterSilver,
                  filterBronze: filterBronze,
                  filterGold: filterGold,
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
                setMarketCardsTypeFilter({
                  filterSilver: filterSilver,
                  filterBronze: !filterBronze,
                  filterGold: filterGold,
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
          id="marketCardsPosition"
          className="Filter-Header"
          onClick={(e) => changeMarketCardsDisplayOps(e.target.id)}
        >
          <h4 id="marketCardsPosition">Position</h4>
          {marketCardsFilterDisplay.marketCardsPosition ? (
            <img id="marketCardsPosition" alt="UVector" src={UVector} />
          ) : (
            <img id="marketCardsPosition" alt="DVector" src={DVector} />
          )}
        </div>
        <div
          style={{
            display: !marketCardsFilterDisplay.marketCardsPosition && "none",
          }}
        >
          <p
            onClick={() =>
              dispatch(
                setMarketCardsPositionFilter({
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
                setMarketCardsPositionFilter({
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
                setMarketCardsPositionFilter({
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
                setMarketCardsPositionFilter({
                  filterDefender: filterDefender,
                  filterMidfielder: filterMidfielder,
                  filterForward: !filterForward,
                  filterGoalkeeper: filterGoalkeeper,
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
          id="marketCardsPrice"
          className="Filter-Header"
          onClick={(e) => changeMarketCardsDisplayOps(e.target.id)}
        >
          <h4 id="marketCardsPrice">Price</h4>
          {marketCardsFilterDisplay.marketCardsPrice ? (
            <img id="marketCardsPrice" alt="UVector" src={UVector} />
          ) : (
            <img id="marketCardsPrice" alt="DVector" src={DVector} />
          )}
        </div>
        <div
          style={{
            display: !marketCardsFilterDisplay.marketCardsPrice && "none",
          }}
        >
          <div className="Filter-Prices">
            <p>
              € {marketCardsFilterRangeValue.marketCardsRangeMin.toFixed(2)}
            </p>
            <p>
              € {marketCardsFilterRangeValue.marketCardsRangeMax.toFixed(2)}
            </p>
          </div>
          {localStorage.getItem("myCards") && (
            <RangeSlider
              id="Filter-RangeSlider"
              min={0}
              max={marketCardsMaxPrice}
              step={1}
              value={[
                marketCardsFilterRangeValue.marketCardsRangeMin.toFixed(2) ?? 0,
                marketCardsFilterRangeValue.marketCardsRangeMax.toFixed(2) ??
                  30,
              ]}
              onInput={(value) =>
                changeMarketCardsFilterRange(value, numOfPages)
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterMarket;
