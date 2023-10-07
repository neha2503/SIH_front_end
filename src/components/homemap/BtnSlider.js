import React from "react";
import "./Slider.css";
import leftArrow from "../icons/left-arrow.png";
import rightArrow from "../icons/right-arrow.png";

export default function BtnSlider() {
  return (
    <div>
      <button className="btn-slide prev" id="prev">
        <img src={leftArrow} />
      </button>
      <button className="btn-slide next" id="next">
        <img src={rightArrow} />
      </button>
    </div>
  );
}
