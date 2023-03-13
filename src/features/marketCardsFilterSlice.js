import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  marketCardsTypeFilter: {
    filterGold: true,
    filterSilver: true,
    filterBronze: true,
  },
  marketCardsPositionFilter: {
    filterGoalkeeper: true,
    filterDefender: true,
    filterMidfielder: true,
    filterForward: true,
  },
  marketCardsFilterDisplay: {
    myCardsCardType: true,
    myCardsPosition: true,
    myCardsPrice: true,
  },
};

export const marketCardsFilterSlice = createSlice({
  name: "marketCardsFilter",
  initialState,
  reducers: {
    setMarketCardsFilterDisplay: (state, action) => {
      state.marketCardsFilterDisplay = {
        ...state.marketCardsFilterDisplay,
        [action.payload]: !state.marketCardsFilterDisplay[action.payload],
      };
    },
    setMarketCardsTypeFilter: (state, action) => {
      state.marketCardsTypeFilter = action.payload;
    },
    setMarketCardsPositionFilter: (state, action) => {
      state.marketCardsPositionFilter = action.payload;
    },
  },
});

export const {
  setMarketCardsFilterDisplay,
  setMarketCardsTypeFilter,
  setMarketCardsPositionFilter,
} = marketCardsFilterSlice.actions;

export default marketCardsFilterSlice.reducer;

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
