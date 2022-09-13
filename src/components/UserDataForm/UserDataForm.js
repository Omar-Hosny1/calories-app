import React, { useState } from "react";
import "./UserDataForm.css";
function UserDataForm() {
  let [userData, setUserData] = useState({});
  return (
    <div className="user-data-form">
      <div className="user-form">
        <div className="male-female">
          <span>Body Parameters</span>
          <div className="male-female__btns">
            <button className="active btn-form">Male</button>
            <button className="btn-form not-active">Female</button>
          </div>
        </div>
        <div className="age-weight-height">
          <input placeholder="Age" />
          <input placeholder="Weight" />
          <input placeholder="Height" />
        </div>
        <div className="activity">
          <span className="activity-span">Activity Level</span>
          <p>
            <strong>Middle : </strong> Activity that burns an additional 400-650
            calories for females or 500-800 calories for males
          </p>
          <div className="line"></div>
          <div className="lvl">
            <div className="active-circle">
              <span>LOW</span>
            </div>
            <div className="circle">
              <span>MIDDLE</span>
            </div>
            <div className="circle">
              <span>HIGH</span>
            </div>
          </div>
        </div>
        <div className="goals">
          <span>Goals</span>
          <div className="goals__btns">
            <button className="active">LOSE</button>
            <button className="not-active">MAINTAIN</button>
            <button className="not-active">GAIN</button>
          </div>
        </div>
        <div className="calc-btns">
          <button>clear</button>
          <button>Calculate</button>
        </div>
      </div>
    </div>
  );
}

export default UserDataForm;
