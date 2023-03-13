import React from "react";
import Slider from "./Slider";
import MyCards from "./MyCards";
import Market from "./Market";
import "../styles/MainPage.css";

function MainPage() {
  return (
    <div className="MainPage">
      <Slider />
      <MyCards />
      <Market />
    </div>
  );
}

export default MainPage;
