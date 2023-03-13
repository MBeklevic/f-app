import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// API CALLS
export const getMyCards = createAsyncThunk("getMyCards", async () => {
  try {
    const res = await axios.get("http://challenge.vole.io/cards/mycards");
    if (res.status !== 200) throw new Error("Something went wrong!!!");
    localStorage.setItem("myCards", JSON.stringify(res.data));
    return res.data;
  } catch (error) {
    console.log("something went wrong");
  }
});
export const getMarketCards = createAsyncThunk("getMarketCards", async () => {
  try {
    const res = await axios.get("http://challenge.vole.io/cards/market");
    if (res.status !== 200) throw new Error("Something went wrong!!!");
    localStorage.setItem("marketCards", JSON.stringify(res.data));
    return res.data;
  } catch (error) {
    console.log("something went wrong");
  }
});
export const getBronzeCards = createAsyncThunk("getBronzeCards", async () => {
  try {
    const res = await axios.get("http://challenge.vole.io/cards/market");
    if (res.status !== 200) throw new Error("Something went wrong!!!");
    const bCards = res.data.filter((card) => card.cardType === "Bronze");
    localStorage.setItem("bronzeCards", JSON.stringify(bCards));
    return bCards;
  } catch (error) {
    console.log("something went wrong");
  }
});
export const getBudget = createAsyncThunk("getBudget", async () => {
  try {
    const res = await axios.get("http://challenge.vole.io/budget");
    if (res.status !== 200) throw new Error("Something went wrong!!!");
    localStorage.setItem("budget", JSON.stringify(res.data.budget));
    return res.data.budget;
  } catch (error) {
    console.log("something went wrong");
  }
});

// STATE
const initialState = {
  myCards: [],
  marketCards: [],
  bronzeCards: [],
  wallet: 0,
};
export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToWallet: (state, action) => {
      state.wallet += action.payload;
    },
    subtractFromWallet: (state, action) => {
      state.wallet -= action.payload;
    },
    addToMyCards: (state, action) => {
      state.myCards.push(action.payload);
    },
    removeFromMyCards: (state, action) => {
      console.log(state.myCards);
      state.myCards = state.myCards.filter(
        (card) => action.payload !== card.id
      );
    },
    addToMarketCards: (state, action) => {
      state.marketCards.push(action.payload);
    },
    removeFromMarketCards: (state, action) => {
      state.marketCards = state.marketCards.filter(
        (card) => action.payload !== card.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMyCards.fulfilled, (state, action) => {
      state.myCards = action.payload;
    });
    builder.addCase(getMarketCards.fulfilled, (state, action) => {
      state.marketCards = action.payload;
    });
    builder.addCase(getBronzeCards.fulfilled, (state, action) => {
      state.bronzeCards = action.payload;
    });
    builder.addCase(getBudget.fulfilled, (state, action) => {
      state.wallet = action.payload;
    });
  },
});

export const {
  addToWallet,
  subtractFromWallet,
  addToMyCards,
  removeFromMyCards,
  addToMarketCards,
  removeFromMarketCards,
} = cardSlice.actions;

export default cardSlice.reducer;

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
