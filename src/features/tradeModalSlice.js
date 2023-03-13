import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tradeModal: {
    tradeModalDisplay: false,
    tradeType: "sell",
    tradePrice: 0,
    tradingCard: {},
  },
};

export const tradeModalSlice = createSlice({
  name: "tradeModal",
  initialState,
  reducers: {
    setTradeModal: (state, action) => {
      state.tradeModal = action.payload;
    },
    cancelTradeModal: (state) => {
      state.tradeModal = {
        tradeModalDisplay: false,
        tradeType: "",
        tradePrice: 0,
        tradingCard: {},
      };
    },
  },
});

export const { setTradeModal, cancelTradeModal } = tradeModalSlice.actions;

export default tradeModalSlice.reducer;

// const [tradeModal, setTradeModal] = useState({
//   tradeModalDisplay: false,
//   tradeType: "sell",
//   tradePrice: 0,
//   tradingCard: {},
// });

// const cancelTradeModal = () => {
//   setTradeModal({
//     tradeModalDisplay: false,
//     tradeType: "",
//     tradePrice: 0,
//   });
// };
