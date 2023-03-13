import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerCardDisplay: {
    playerCardId: 9,
    isPlayerCard: false,
  },
};

export const playerCardDisplaySlice = createSlice({
  name: "playerCardDisplay",
  initialState,
  reducers: {
    setPlayerCardDisplay: (state, action) => {
      state.playerCardDisplay = action.payload;
    },
    hideCardDetails: (state) => {
      state.playerCardDisplay = {
        ...state.playerCardDisplay,
        isPlayerCard: false,
      };
    },
  },
});

export const { setPlayerCardDisplay, hideCardDetails } =
  playerCardDisplaySlice.actions;

export default playerCardDisplaySlice.reducer;

// const [playerCardDisplay, setPlayerCardDisplay] = useState({
//   playerCardId: 9,
//   isPlayerCard: false,
// });

// const hideCardDetails = () => {
//   setPlayerCardDisplay({
//     ...playerCardDisplay,
//     isPlayerCard: false,
//   });
// };
