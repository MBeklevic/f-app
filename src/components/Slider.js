import React, { useContext } from "react";
import "../styles/Slider.css";
import { useDispatch, useSelector } from "react-redux";
import { goToSlide } from "../features/sliderSlice";
import LVector from "../assets/LVector.svg";
import RVector from "../assets/RVector.svg";

function Slider() {
  const dispatch = useDispatch();
  const { bronzeCards } = useSelector((state) => state.card);
  const { sliderCurrentIndex } = useSelector((state) => state.slider);

  const goToPrevious = () => {
    sliderCurrentIndex > 0
      ? dispatch(goToSlide(sliderCurrentIndex - 1))
      : dispatch(goToSlide(bronzeCards.length - 1));
  };

  const goToNext = () => {
    sliderCurrentIndex === bronzeCards.length - 1
      ? dispatch(goToSlide(0))
      : dispatch(goToSlide(sliderCurrentIndex + 1));
  };

  const currentIndex = sliderCurrentIndex;
  const previousIndex =
    currentIndex === 0 ? bronzeCards.length - 1 : currentIndex - 1;
  const nextIndex =
    currentIndex === bronzeCards.length - 1 ? 0 : currentIndex + 1;
  const cardImages = bronzeCards.map((card) => card.photoUrl);
  return (
    <div className="Slider">
      <div className="Slider-Announcement">
        <p>
          NEW <span>BRONZE CARDS</span>
        </p>
        <div className="Slider-Dots">
          <img alt="LVector" src={LVector} onClick={() => goToPrevious()} />
          {bronzeCards.map((card, idx) => (
            <div
              className="Slider-Dots-SingleDot"
              style={{ color: currentIndex === idx ? "#E8282B" : "#fff" }}
              key={card.id}
              onClick={() => dispatch(goToSlide(idx))}
            >
              .
            </div>
          ))}
          <img alt="RVector" src={RVector} onClick={() => goToNext()} />
        </div>
      </div>
      <div className="Slider-Cards">
        <img alt="previous" src={cardImages[previousIndex]} />
        <img
          alt="current"
          id="Slider-Cards-current"
          src={cardImages[currentIndex]}
        />
        <img alt="next" src={cardImages[nextIndex]} />
      </div>
    </div>
  );
}

export default Slider;
