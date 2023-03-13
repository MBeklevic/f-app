import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myCardsPagination: 1,
  marketCardsPagination: 1,
  myCardsNumOfPage: 4,
  marketCardsNumOfPage: 4,
  // myCardsNumOfPage: Math.ceil(state.myCards && state.myCards.length / 10) ?? 4,
  // marketCardsNumOfPage:
  //   Math.ceil(state.marketCards && state.marketCards.length / 10) ?? 4,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setMarketCardsPagination: (state, action) => {
      state.marketCardsPagination = action.payload;
    },
    setMyCardsPagination: (state, action) => {
      state.myCardsPagination = action.payload;
    },
    setMarketCardsNumOfPage: (state, action) => {
      state.marketCardsNumOfPage = action.payload;
    },
    setMyCardsNumOfPage: (state, action) => {
      state.myCardsNumOfPage = action.payload;
    },
    increaseMarketCardsPagination: (state) => {
      state.marketCardsPagination >= state.marketCardsNumOfPage
        ? (state.marketCardsPagination = 1)
        : (state.marketCardsPagination += 1);
    },
    increaseMyCardsPagination: (state) => {
      state.myCardsPagination >= state.myCardsNumOfPage
        ? (state.myCardsPagination = 1)
        : (state.myCardsPagination += 1);
    },
  },
});

export const {
  setMarketCardsPagination,
  setMyCardsPagination,
  setMarketCardsNumOfPage,
  setMyCardsNumOfPage,
  increaseMarketCardsPagination,
  increaseMyCardsPagination,
} = paginationSlice.actions;

export default paginationSlice.reducer;

// const [myCardsPagination, setMyCardsPagination] = useState(1);
// const [marketCardsPagination, setMarketCardsPagination] = useState(1);
// const [myCardsNumOfPage, setMyCardsNumOfPage] = useState(
//   Math.ceil(myCards && myCards.length / 10) ?? 4
// );
// const [marketCardsNumOfPage, setMarketCardsNumOfPage] = useState(
//   Math.ceil(marketCards && marketCards.length / 10) ?? 4
// );
