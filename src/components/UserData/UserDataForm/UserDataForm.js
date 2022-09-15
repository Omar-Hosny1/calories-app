import React, { useReducer, useState } from "react";
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

  return (
    <div
      className={
        isCal == true
          ? "user-data-form left-win"
          : isCal == false
          ? "user-data-form right-win"
          : "user-data-form"
      }
    >
      <div className="user-form">
        <div className="male-female">
          <span>Body Parameters</span>
          <div className="male-female__btns">
            <button
              className={
                userData.gender === "MALE"
                  ? "active btn-form"
                  : "not-active btn-form"
              }
              onClick={() => dispachFn({ id: "MALE" })}
            >
              Male
            </button>
            <button
              className={
                userData.gender === "FEMALE"
                  ? "active btn-form"
                  : "not-active btn-form"
              }
              onClick={() => dispachFn({ id: "FEMALE" })}
            >
              Female
            </button>
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
            placeholder="Weight (KG)"
            value={userData.weight}
            onChange={(e) => {
              dispachFn({ id: "WEIGHT", weight: e.target.value });
            }}
          />
          <input
            placeholder="Height (CM)"
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
            <div
              className={
                userData.activity === "LOW" ? "active-circle" : "circle"
              }
              onClick={() => dispachFn({ id: "LOW" })}
            >
              <span>LOW</span>
            </div>
            <div
              className={
                userData.activity === "MIDDLE" ? "active-circle" : "circle"
              }
              onClick={() => dispachFn({ id: "MIDDLE" })}
            >
              <span>MIDDLE</span>
            </div>
            <div
              className={
                userData.activity === "HIGH" ? "active-circle" : "circle"
              }
              onClick={() => dispachFn({ id: "HIGH" })}
            >
              <span>HIGH</span>
            </div>
          </div>
        </div>
        <div className="goals">
          <span>Goals</span>
          <div className="goals__btns">
            <button
              className={userData.goal === "LOSE" ? "active" : "not-active"}
              onClick={() => dispachFn({ id: "LOSE" })}
            >
              LOSE
            </button>
            <button
              className={userData.goal === "MAINTAIN" ? "active" : "not-active"}
              onClick={() => dispachFn({ id: "MAINTAIN" })}
            >
              MAINTAIN
            </button>
            <button
              className={userData.goal === "GAIN" ? "active" : "not-active"}
              onClick={() => dispachFn({ id: "GAIN" })}
            >
              GAIN
            </button>
          </div>
        </div>
        <div className="calc-btns">
          <button
            onClick={() => {
              dispachFn("reset");
              setIsCalc(false);
            }}
          >
            clear
          </button>
          <button onClick={submitHandler}>Calculate</button>
        </div>
      </div>
    </div>
  );
}

export default UserDataForm;
