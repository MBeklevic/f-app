import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyCards,
  getBronzeCards,
  getMarketCards,
  getBudget,
} from "./features/cardSlice";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Player from "./components/Player";
import Rejection from "./components/Rejection";
import TradeModal from "./components/TradeModal";

function App() {
  const dispatch = useDispatch();
  // console.log(useSelector((state) => state.card));
  const { bronzeCards, marketCards, myCards, wallet } = useSelector(
    (state) => state.card
  );

  useEffect(() => {
    dispatch(getMyCards());
    dispatch(getMarketCards());
    dispatch(getBronzeCards());
    dispatch(getBudget());
  }, []);
  return (
    <div className="App">
      <Header />
      <Player />
      <TradeModal />
      <Rejection />
      <MainPage />
    </div>
  );
}
export default App;

// ****************************************************** OLD VERSİON WİTH CONTEXT API ******************************************

// const myCardsFromStorage = JSON.parse(localStorage.getItem("myCards"));
// const marketCardsFromStorage = JSON.parse(
//   localStorage.getItem("marketCards")
// );
// const bronzeCardsFromStorage = JSON.parse(
//   localStorage.getItem("bronzeCards")
// );
// const budgetFromStorage = JSON.parse(localStorage.getItem("budget"));

// States:
// const [myCards, setMyCards] = useState(myCardsFromStorage ?? []);
// const [marketCards, setMarketCards] = useState(marketCardsFromStorage ?? []);
// const [wallet, setWallet] = useState(budgetFromStorage ?? 0);
// const [bronzeCards, setBronzeCards] = useState(bronzeCardsFromStorage ?? []);
// const [sliderCurrentIndex, setSliderCurrentIndex] = useState(0);

// filterRangeValue.js
// const [myCardsFilterRangeValue, setMyCardsFilterRangeValue] = useState({
//   myCardsRangeMin: 0,
//   myCardsRangeMax: 30,
// });
// const [marketCardsFilterRangeValue, setMarketCardsFilterRangeValue] =
//   useState({
//     marketCardsRangeMin: 0,
//     marketCardsRangeMax: 30,
//   });

// // myCardsFilter.js
// const [myCardsTypeFilter, setMyCardsTypeFilter] = useState({
//   filterGold: true,
//   filterSilver: true,
//   filterBronze: true,
// });
// const [myCardsPositionFilter, setMyCardsPositionFilter] = useState({
//   filterGoalkeeper: true,
//   filterDefender: true,
//   filterMidfielder: true,
//   filterForward: true,
// });
// const [myCardsFilterDisplay, setMyCardsFilterDisplay] = useState({
//   myCardsCardType: true,
//   myCardsPosition: true,
//   myCardsPrice: true,
// });
// marketCardsFilter.js
// const [marketCardsTypeFilter, setMarketCardsTypeFilter] = useState({
//   filterGold: true,
//   filterSilver: true,
//   filterBronze: true,
// });
// const [marketCardsPositionFilter, setMarketCardsPositionFilter] = useState({
//   filterGoalkeeper: true,
//   filterDefender: true,
//   filterMidfielder: true,
//   filterForward: true,
// });
// const [marketCardsFilterDisplay, setMarketCardsFilterDisplay] = useState({
//   marketCardsCardType: true,
//   marketCardsPosition: true,
//   marketCardsPrice: true,
// });

// pagination.js
// const [myCardsPagination, setMyCardsPagination] = useState(1);
// const [marketCardsPagination, setMarketCardsPagination] = useState(1);
// const [myCardsNumOfPage, setMyCardsNumOfPage] = useState(
//   Math.ceil(myCards && myCards.length / 10) ?? 4
// );
// const [marketCardsNumOfPage, setMarketCardsNumOfPage] = useState(
//   Math.ceil(marketCards && marketCards.length / 10) ?? 4
// );

// const [playerCardDisplay, setPlayerCardDisplay] = useState({
//   playerCardId: 9,
//   isPlayerCard: false,
// });
// const [playerInfo, SetPlayerInfo] = useState();
// const [tradeModal, setTradeModal] = useState({
//   tradeModalDisplay: false,
//   tradeType: "sell",
//   tradePrice: 0,
//   tradingCard: {},
// });
// const [rejection, setRejection] = useState(false);

// Functions
// const trade = (card, type) => {
//   if (type === "buy") {
//     subtractFromWallet(card.price);
//     addToMyCards(card);
//     removeFromMarketCards(card.id);
//     cancelTradeModal();
//   } else {
//     addToWallet(card.price);
//     removeFromMyCards(card.id);
//     addToMarketCards(card);
//     cancelTradeModal();
//   }
// };

// const cancelTradeModal = () => {
//   setTradeModal({
//     tradeModalDisplay: false,
//     tradeType: "",
//     tradePrice: 0,
//   });
// };
// const setTradeModalOn = (price, type, card) => {
//   if (price >= wallet && type.toLowerCase() === "buy") {
//     setRejection(true);
//   } else {
//     setTradeModal({
//       tradeModalDisplay: true,
//       tradeType: type,
//       tradePrice: price,
//       tradingCard: card,
//     });
//   }
// };
// const hideCardDetails = () => {
//   setPlayerCardDisplay({
//     ...playerCardDisplay,
//     isPlayerCard: false,
//   });
// };
// const displayCardDetails = (id) => {
//   getPlayerInfo(id);
//   setPlayerCardDisplay({
//     playerCardId: id,
//     isPlayerCard: true,
//   });
// };
// const increaseMyCardsPagination = () => {
//   console.log("first");
//   setMyCardsPagination(
//     myCardsPagination >= myCardsNumOfPage ? 1 : myCardsPagination + 1
//   );
// };
// const increaseMarketCardsPagination = () => {
//   setMarketCardsPagination(
//     marketCardsPagination >= marketCardsNumOfPage
//       ? 1
//       : marketCardsPagination + 1
//   );
// };
// const changeMyCardsDisplayOps = (id) => {
//   setMyCardsFilterDisplay({
//     ...myCardsFilterDisplay,
//     [id]: !myCardsFilterDisplay[id],
//   });
// };
// const changeMyCardsFilterRange = (range) => {
//   setMyCardsFilterRangeValue({
//     myCardsRangeMin: range[0],
//     myCardsRangeMax: range[1],
//   });
// };
// const changeMarketCardsDisplayOps = (id) => {
//   setMarketCardsFilterDisplay({
//     ...marketCardsFilterDisplay,
//     [id]: !marketCardsFilterDisplay[id],
//   });
// };
// const changeMarketCardsFilterRange = (range, numOfPages) => {
//   setMarketCardsPagination(1);
//   setMarketCardsNumOfPage(numOfPages);
//   setMarketCardsFilterRangeValue({
//     marketCardsRangeMin: range[0],
//     marketCardsRangeMax: range[1],
//   });
// };
// const goToSlide = (slideIndex) => {
//   setSliderCurrentIndex(slideIndex);
// };

// const goToPreviousSlide = () => {
//   setSliderCurrentIndex(
//     sliderCurrentIndex > 0 ? sliderCurrentIndex - 1 : bronzeCards.length - 1
//   );
// };
// const goToNextSlide = () => {
//   setSliderCurrentIndex(
//     sliderCurrentIndex === bronzeCards.length - 1 ? 0 : sliderCurrentIndex + 1
//   );
// };

// Trade Functions
// const addToWallet = (value) => {
//   setWallet(wallet + value);
// };
// const subtractFromWallet = (value) => {
//   setWallet(wallet - value);
// };
// const addToMyCards = (card) => {
//   setMyCards([...myCards, card]);
// };
// const removeFromMyCards = (id) => {
//   setMyCards(myCards.filter((card) => id !== card.id));
// };
// const addToMarketCards = (card) => {
//   setMarketCards([...marketCards, card]);
// };
// const removeFromMarketCards = (id) => {
//   setMarketCards(marketCards.filter((card) => id !== card.id));
// };

// API Calls:

// const getMyCards = async () => {
//   try {
//     const res = await axios.get("http://challenge.vole.io/cards/mycards");
//     if (res.status !== 200) throw new Error("Something went wrong!!!");
//     localStorage.setItem("myCards", JSON.stringify(res.data));
//     setMyCards(res.data);
//   } catch (error) {
//     console.log("something went wrong");
//   }
// };
// const getPlayerInfo = async (id) => {
//   try {
//     const res = await axios.get(`http://challenge.vole.io/cards/${id}`);
//     if (res.status !== 200) throw new Error("Something went wrong!!!");
//     SetPlayerInfo(res.data);
//   } catch (error) {
//     console.log("something went wrong");
//   }
// };

// const getMarketCards = async () => {
//   try {
//     const res = await axios.get("http://challenge.vole.io/cards/market");
//     if (res.status !== 200) throw new Error("Something went wrong!!!");
//     const bCards = res.data.filter((card) => card.cardType === "Bronze");
//     setMarketCards(res.data);
//     setBronzeCards(bCards);
//     localStorage.setItem("marketCards", JSON.stringify(res.data));
//     localStorage.setItem("bronzeCards", JSON.stringify(bCards));
//   } catch (error) {
//     console.log("something went wrong");
//   }
// };
// const getBudget = async () => {
//   try {
//     const res = await axios.get("http://challenge.vole.io/budget");
//     if (res.status !== 200) throw new Error("Something went wrong!!!");
//     setWallet(res.data.budget);
//     localStorage.setItem("budget", JSON.stringify(res.data.budget));
//   } catch (error) {
//     console.log("something went wrong");
//   }
// };
// useEffect(() => {
//   myCards.length === 0 && getMyCards();
//   marketCards.length === 0 && getMarketCards();
//   bronzeCards.length === 0 && getMarketCards();
//   !JSON.parse(localStorage.getItem("budget")) && getBudget();
// }, []);
