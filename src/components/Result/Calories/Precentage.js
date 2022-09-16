import React, { useEffect, useState } from "react";
import "./Precentage.css";

export default function Precentage({ data, calories }) {
  const [portein, setProtein] = useState();
  const [carb, setCarb] = useState();

  useEffect(() => {
    const caloriesFromCarb = parseInt(calories) / 2;
    const eachGram = caloriesFromCarb / 4;
    setCarb(eachGram);
    if (data.activity === "LOW") {
      setProtein(parseInt(data.weight) * 0.8);
    } else if (data.activity === "MIDDLE") {
      setProtein(parseInt(data.weight) * 1.5);
    } else if (data.activity === "HIGH") {
      setProtein(parseInt(data.weight) * 1.8);
    }
  }, [calories, data]);

  return (
    <div className="precentage-container">
      <div className="amount">
        <p>Carbohydrate</p>
        <p>
          <span>{carb?.toFixed()}g</span> / day
        </p>
      </div>
      <div className="amount">
        <p>Portein</p>
        <p>
          <span>{portein?.toFixed()}g</span> / day
        </p>
      </div>
    </div>
  );
}
