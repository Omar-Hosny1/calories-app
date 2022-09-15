import React from "react";
import "./Goals.css";
function Goals(props) {
  return (
    <div className="goals">
      <span>Goals</span>
      <div className="goals__btns">
        <button
          className={props.ClassNames.loseGoal}
          onClick={props.loseHandler}
        >
          LOSE
        </button>
        <button
          className={props.ClassNames.maintainGoal}
          onClick={props.maintainHandler}
        >
          MAINTAIN
        </button>
        <button
          className={props.ClassNames.gainGoal}
          onClick={props.gainHandler}
        >
          GAIN
        </button>
      </div>
    </div>
  );
}

export default Goals;
