import React, { useReducer, useState } from "react";
import "./UserDataForm.css";

const initState = {
  gender: null,
  age: 0,
  weight: 0,
  height: 0,
  activity: null,
  goal: null,
};
function userDataFn(state, action) {
  if (action.id == "AGE") return { ...initState, age: action.age };
  else if (action.id == "WEIGHT") return { ...initState, weight: action.age };
  else if (action.id == "HEIGHT") return { ...initState, height: action.age };
  else if (action.id == "LOSE") return { ...initState, goal: "LOSE" };
  else if (action.id == "GAIN") return { ...initState, goal: "GAIN" };
  else if (action.id == "MAINTAIN") return { ...initState, goal: "MAINTAIN" };
}
function UserDataForm() {
  const [userData, dispachFn] = useReducer(userDataFn, {
    gender: null,
    age: 0,
    weight: 0,
    height: 0,
    activity: null,
    goal: null,
  });
  // userData
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
          <input
            placeholder="Age"
            value={userData.age}
            onChange={(e) => {
              dispachFn({ id: "AGE", age: e.target.value });
            }}
          />
          <input
            placeholder="Weight"
            value={userData.weight}
            onChange={(e) => {
              dispachFn({ id: "WEIGHT", weight: e.target.value });
            }}
          />
          <input
            placeholder="Height"
            value={userData.height}
            onChange={(e) => {
              dispachFn({ id: "HEIGHT", height: e.target.value });
            }}
          />
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
            <button
              className={userData.goal == "LOSE" ? "active" : "not-active"}
              onClick={() => dispachFn({ id: "LOSE" })}
            >
              LOSE
            </button>
            <button
              className={userData.goal == "MAINTAIN" ? "active" : "not-active"}
              onClick={() => dispachFn({ id: "MAINTAIN" })}
            >
              MAINTAIN
            </button>
            <button
              className={userData.goal == "GAIN" ? "active" : "not-active"}
              onClick={() => dispachFn({ id: "GAIN" })}
            >
              GAIN
            </button>
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
