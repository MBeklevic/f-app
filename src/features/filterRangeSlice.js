import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myCardsFilterRangeValue: {
    myCardsRangeMin: 0,
    myCardsRangeMax: 30,
  },
  marketCardsFilterRangeValue: {
    marketCardsRangeMin: 0,
    marketCardsRangeMax: 30,
  },
};

export const filterRangeSlice = createSlice({
  name: "filterRange",
  initialState,
  reducers: {
    setMyCardsFilterRangeValue: (state, action) => {
      state.myCardsFilterRangeValue = action.payload;
    },
    setMarketCardsFilterRangeValue: (state, action) => {
      state.marketCardsFilterRangeValue = action.payload;
    },
  },
});

export const { setMyCardsFilterRangeValue, setMarketCardsFilterRangeValue } =
  filterRangeSlice.actions;

export default filterRangeSlice.reducer;

// const changeMyCardsFilterRange = (range) => {
//   setMyCardsFilterRangeValue({
//     myCardsRangeMin: range[0],
//     myCardsRangeMax: range[1],
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
