import React from "react";
import "./Advice.css";

export default function Advice({ goal }) {
  return (
    <div className="container">
      <p style={{ fontSize: "30px" }}>Adjust Your Food</p>

      {goal === "LOSE" ? (
        <p style={{ fontSize: "20px" }}>
          Your Goal is {goal?.toLowerCase()} weight, You should eat less
          calories per day than your own
        </p>
      ) : goal === "MAINTAIN" ? (
        <p style={{ fontSize: "20px" }}>
          Your Goal is {goal?.toLowerCase()} weight, You should eat same
          calories per day as above
        </p>
      ) : (
        <p style={{ fontSize: "20px" }}>
          Your Goal is {goal?.toLowerCase()} weight, You should eat more
          calories per day than your own
        </p>
      )}
    </div>
  );
}
