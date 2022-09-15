import React, { useEffect, useState } from "react";
import "./Caloriess.css";
import Precentage from "./Precentage.js";

export default function Calories({ data }) {
  const [calories, setCalories] = useState();

  useEffect(() => {
    if (data.gender === "MALE") {
      setCalories(
        13.4 * parseInt(data.weight) +
          4.9 * parseInt(data.height) -
          5.7 * parseInt(data.age) +
          88.4
      );
    } else {
      setCalories(
        9.247 * parseInt(data.weight) +
          3.098 * parseInt(data.height) -
          4.33 * parseInt(data.age) +
          447.593
      );
    }
    if (data.goal == "LOSE") {
      setCalories((calories) => (calories -= 300));
    } else if (data.goal == "GAIN") {
      setCalories((calories) => (calories += 300));
    }
  }, [data]);

  return (
    <div>
      <p style={{ fontSize: "30px" }}>Your Result</p>
      <div className="calories-container">
        <div className="calories-part">
          <h1>{calories?.toFixed(2)} kcal</h1>
          <p style={{ fontSize: "18px" }}>
            Suggested amount of calories <span>per day.</span>
          </p>
        </div>
        <Precentage data={data} calories={calories} />
      </div>
    </div>
  );
}
