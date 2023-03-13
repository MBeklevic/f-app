import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myCardsTypeFilter: {
    filterGold: true,
    filterSilver: true,
    filterBronze: true,
  },
  myCardsPositionFilter: {
    filterGoalkeeper: true,
    filterDefender: true,
    filterMidfielder: true,
    filterForward: true,
  },
  myCardsFilterDisplay: {
    myCardsCardType: true,
    myCardsPosition: true,
    myCardsPrice: true,
  },
};

export const myCardsFilterSlice = createSlice({
  name: "myCardsFilter",
  initialState,
  reducers: {
    setMyCardsFilterDisplay: (state, action) => {
      state.myCardsFilterDisplay = {
        ...state.myCardsFilterDisplay,
        [action.payload]: !state.myCardsFilterDisplay[action.payload],
      };
    },
    setMyCardsTypeFilter: (state, action) => {
      state.myCardsTypeFilter = action.payload;
    },
    setMyCardsPositionFilter: (state, action) => {
      state.myCardsPositionFilter = action.payload;
    },
  },
});

export const {
  setMyCardsFilterDisplay,
  setMyCardsTypeFilter,
  setMyCardsPositionFilter,
} = myCardsFilterSlice.actions;

export default myCardsFilterSlice.reducer;
