import React from "react";
import "./Result.css";
import Calories from "../Calories/Calories";
import Advice from "../Advice/Advice";
import Dishes from "../Disches/Dishes";

export default function ResultPage({ data }) {
  return (
    <div className="result-pg">
      <Calories data={data} />
      <Advice goal={data.goal} />
      <Dishes />
    </div>
  );
}
