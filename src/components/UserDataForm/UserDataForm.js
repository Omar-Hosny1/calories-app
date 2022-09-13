import React from "react";
import "./UserDataForm.css";
function UserDataForm() {
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
