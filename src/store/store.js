import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../features/cardSlice";
import filterRangeReducer from "../features/filterRangeSlice";
import marketCardsFilterReducer from "../features/marketCardsFilterSlice";
import myCardsFilterReducer from "../features/myCardsFilterSlice";
import paginationReducer from "../features/paginationSlice";
import playerCardDisplayReducer from "../features/playerCardDisplaySlice";
import playerInfoReducer from "../features/playerInfoSlice";
import rejectionReducer from "../features/rejectionSlice";
import sliderReducer from "../features/sliderSlice";
import tradeModalReducer from "../features/tradeModalSlice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
    filterRange: filterRangeReducer,
    marketCardsFilter: marketCardsFilterReducer,
    myCardsFilter: myCardsFilterReducer,
    pagination: paginationReducer,
    playerCardDisplay: playerCardDisplayReducer,
    playerInfo: playerInfoReducer,
    rejection: rejectionReducer,
    slider: sliderReducer,
    tradeModal: tradeModalReducer,
  },
});
