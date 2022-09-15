import React, { useReducer, useState } from "react";
import Activity from "./Activity";
import CalcRes from "./CalcRes";
import Gender from "./Gender";
import Goals from "./Goals";
import UserAWH from "./UserAWH";
import "./UserDataForm.css";

const initState = {
  gender: null,
  age: "",
  weight: "",
  height: "",
  activity: null,
  goal: null,
};

function userDataFn(state, action) {
  if (action.id === "AGE") return { ...state, age: action.age };
  else if (action.id === "WEIGHT") return { ...state, weight: action.weight };
  else if (action.id === "HEIGHT") return { ...state, height: action.height };
  else if (action.id === "LOSE") return { ...state, goal: "LOSE" };
  else if (action.id === "GAIN") return { ...state, goal: "GAIN" };
  else if (action.id === "MAINTAIN") return { ...state, goal: "MAINTAIN" };
  else if (action.id === "MALE") return { ...state, gender: "MALE" };
  else if (action.id === "FEMALE") return { ...state, gender: "FEMALE" };
  else if (action.id === "LOW") return { ...state, activity: "LOW" };
  else if (action.id === "MIDDLE") return { ...state, activity: "MIDDLE" };
  else if (action.id === "HIGH") return { ...state, activity: "HIGH" };
  else return initState;
}

function UserDataForm(props) {
  const [isCal, setIsCalc] = useState(null);

  const [userData, dispachFn] = useReducer(userDataFn, initState);

  const submitHandler = () => {
    if (userData.gender == null) {
      alert("ENTER YOUR GENDER");
      return;
    }
    if (userData.age >= 100) {
      alert("YOUR AGE MUST BE LESS THAN 100Y");
      return;
    }
    if (!userData.age || !Number(+userData.age)) {
      alert("ENTER A VALID AGE");
      return;
    }
    if (
      !userData.weight ||
      !Number(+userData.weight) ||
      +userData.weight < 10
    ) {
      alert("ENTER A VALID WEIGHT");
      return;
    }
    if (
      !userData.height ||
      !Number(+userData.height) ||
      +userData.height < 10
    ) {
      alert("ENTER A VALID HEIGHT");
      return;
    }
    if (userData.activity == null) {
      alert("ENTER YOUR ACTIVITY");
      return;
    }
    if (userData.goal == null) {
      alert("ENTER YOUR GOAL");
      return;
    }
    setIsCalc(true);
    props.enteredUserData(userData);
  };

  const ClassNames = {
    main:
      isCal === true
        ? "user-data-form left-win"
        : isCal === false
        ? "user-data-form right-win"
        : "user-data-form",
    genderMale:
      userData.gender === "MALE" ? "active btn-form" : "not-active btn-form",
    genderFemale:
      userData.gender === "FEMALE" ? "active btn-form" : "not-active btn-form",
    activityLow: userData.activity === "LOW" ? "active-circle" : "circle",
    activityMiddle: userData.activity === "MIDDLE" ? "active-circle" : "circle",
    activityHigh: userData.activity === "HIGH" ? "active-circle" : "circle",
    loseGoal: userData.goal === "LOSE" ? "active" : "not-active",
    maintainGoal: userData.goal === "MAINTAIN" ? "active" : "not-active",
    gainGoal: userData.goal === "GAIN" ? "active" : "not-active",
  };

  const maleHandler = () => {
    dispachFn({ id: "MALE" });
  };
  const FemaleHandler = () => {
    dispachFn({ id: "FEMALE" });
  };
  const inputAgeChangeHandler = (e) => {
    dispachFn({ id: "AGE", age: e.target.value });
  };
  const inputWeightChangeHandler = (e) => {
    dispachFn({ id: "WEIGHT", weight: e.target.value });
  };
  const inputHeightChangeHandler = (e) => {
    dispachFn({ id: "HEIGHT", height: e.target.value });
  };
  const activityLowHandler = () => {
    dispachFn({ id: "LOW" });
  };
  const activityMiddleHandler = () => {
    dispachFn({ id: "MIDDLE" });
  };
  const activityHighHandler = () => {
    dispachFn({ id: "HIGH" });
  };
  const loseHandler = () => {
    dispachFn({ id: "LOSE" });
  };
  const maintainHandler = () => {
    dispachFn({ id: "MAINTAIN" });
  };
  const gainHandler = () => {
    dispachFn({ id: "GAIN" });
  };
  const resetHandler = () => {
    dispachFn("reset");
    setIsCalc(false);
  };

  return (
    <div className={ClassNames.main}>
      <div className="user-form">
        <Gender
          ClassNames={ClassNames}
          maleHandler={maleHandler}
          FemaleHandler={FemaleHandler}
        />
        <UserAWH
          userData={userData}
          inputAgeChangeHandler={inputAgeChangeHandler}
          inputWeightChangeHandler={inputWeightChangeHandler}
          inputHeightChangeHandler={inputHeightChangeHandler}
        />
        <Activity
          activityLowHandler={activityLowHandler}
          activityMiddleHandler={activityMiddleHandler}
          activityHighHandler={activityHighHandler}
          ClassNames={ClassNames}
        />
        <Goals
          loseHandler={loseHandler}
          maintainHandler={maintainHandler}
          gainHandler={gainHandler}
          ClassNames={ClassNames}
        />

        <CalcRes resetHandler={resetHandler} submitHandler={submitHandler} />
      </div>
    </div>
  );
}

export default UserDataForm;
