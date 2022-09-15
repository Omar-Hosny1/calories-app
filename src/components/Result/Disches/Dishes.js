import React, { useRef } from "react";
import "./Dishes.css";
import { data } from "./DischesData";

export default function Dishes() {
  const ref = useRef();

  return (
    <div>
      <p style={{ fontSize: "30px", marginBottom: "5px" }}>Dishes</p>
      <div className="scroll" ref={ref}>
        {data.map((d) => (
          <div className="dishes-card" key={d.id}>
            <img src={d.image} alt="" />
            <div>
              <h5 style={{ fontSize: "20px" }}>{d.title}</h5>
              <p>Calories: {d.calories}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
