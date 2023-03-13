import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  playerInfo: null,
};

export const getPlayerInfo = createAsyncThunk("getPlayerInfo", async (id) => {
  try {
    const res = await axios.get(`http://challenge.vole.io/cards/${id}`);
    if (res.status !== 200) throw new Error("Something went wrong!!!");
    return res.data;
  } catch (error) {
    console.log("something went wrong");
  }
});

export const playerInfoSlice = createSlice({
  name: "playerInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlayerInfo.fulfilled, (state, action) => {
      state.playerInfo = action.payload;
    });
  },
});

export const {} = playerInfoSlice.actions;

export default playerInfoSlice.reducer;

// const [playerInfo, SetPlayerInfo] = useState();
