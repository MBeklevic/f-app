import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rejection: false,
};

export const rejectionSlice = createSlice({
  name: "rejection",
  initialState,
  reducers: {
    setRejection: (state, action) => {
      state.rejection = action.payload;
    },
  },
});

export const { setRejection } = rejectionSlice.actions;

export default rejectionSlice.reducer;

//   const [rejection, setRejection] = useState(false);
