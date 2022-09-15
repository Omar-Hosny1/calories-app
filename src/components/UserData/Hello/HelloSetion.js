import React from "react";
import "./HelloSetion.css";
import { AiOutlineThunderbolt } from "react-icons/ai";
function HelloSetion() {
  return (
    <div className="hello-setion">
      <AiOutlineThunderbolt className="hello-setion__icon" />
      <div className="wel-com">
        <h1>CALORIES CALCULATOR</h1>
        <p>
          Calculate optimmal macronutrient ratios for your body, enter your Age,
          Weight, Height, Gended, and activity level
        </p>
      </div>
    </div>
  );
}

export default HelloSetion;
