import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sliderCurrentIndex: 0,
};

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    goToSlide: (state, action) => {
      state.sliderCurrentIndex = action.payload;
    },
    // goToPreviousSlide: (state,action) => {
    //   state.sliderCurrentIndex = action.payload
    // },
    // goToNextSlide: (state, action) => {
    //   state.sliderCurrentIndex = action.payload;
    // },
  },
});

export const { goToSlide } = sliderSlice.actions;

export default sliderSlice.reducer;

// const goToSlide = (slideIndex) => {
//     setSliderCurrentIndex(slideIndex);
//   };

//   const goToPreviousSlide = () => {
//     setSliderCurrentIndex(
//       sliderCurrentIndex > 0 ? sliderCurrentIndex - 1 : bronzeCards.length - 1
//     );
//   };
//   const goToNextSlide = () => {
//     setSliderCurrentIndex(
//       sliderCurrentIndex === bronzeCards.length - 1 ? 0 : sliderCurrentIndex + 1
//     );
//   };

// goToNextSlide: (state) => {
//   state.sliderCurrentIndex =
//     state.sliderCurrentIndex === state.bronzeCards.length - 1
//       ? 0
//       : (state.sliderCurrentIndex += 1);
// },
// goToPreviousSlide: (state) => {
//   state.sliderCurrentIndex =
//     state.sliderCurrentIndex > 0
//       ? (state.sliderCurrentIndex -= 1)
//       : state.bronzeCards.length - 1;
// },
