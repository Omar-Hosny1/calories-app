import React, { useRef } from "react";
import "./Dishes.css";
import { data } from "./DischesData";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Dishes() {
  const ref = useRef();

  const mealsHandleRight = () => {
    ref.current.scrollLeft += 20;
  };

  const mealsHandleLeft = () => {
    ref.current.scrollLeft -= 20;
  };

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
      <div
        className="arrow"
        style={{ bottom: "80px", right: "15px" }}
        onClick={mealsHandleRight}
      >
        <AiOutlineArrowRight size={30} color="white" />
      </div>

      <div
        className="arrow"
        style={{ bottom: "80px", left: "15px" }}
        onClick={mealsHandleLeft}
      >
        <AiOutlineArrowLeft size={30} color="white" />
      </div>
    </div>
  );
}
