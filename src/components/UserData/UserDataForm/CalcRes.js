import React from "react";
import "./CalcRes.css";
function CalcRes(props) {
  return (
    <div className="calc-btns">
      <button onClick={props.resetHandler}>clear</button>
      <button onClick={props.submitHandler}>Calculate</button>
    </div>
  );
}

export default CalcRes;
