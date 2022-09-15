import React from "react";
import "./Activity.css";
function Activity(props) {
  return (
    <div className="activity">
      <span className="activity-span">Activity Level</span>
      <p>
        <strong>Middle : </strong> Activity that burns an additional 400-650
        calories for females or 500-800 calories for males
      </p>
      <div className="line"></div>
      <div className="lvl">
        <div
          className={props.ClassNames.activityLow}
          onClick={props.activityLowHandler}
        >
          <span>LOW</span>
        </div>
        <div
          className={props.ClassNames.activityMiddle}
          onClick={props.activityMiddleHandler}
        >
          <span>MIDDLE</span>
        </div>
        <div
          className={props.ClassNames.activityHigh}
          onClick={props.activityHighHandler}
        >
          <span>HIGH</span>
        </div>
      </div>
    </div>
  );
}

export default Activity;
