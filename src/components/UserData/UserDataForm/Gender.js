import React from "react";
import "./Gender.css";
function Gender(props) {
  return (
    <div className="male-female">
      <span>Body Parameters</span>
      <div className="male-female__btns">
        <button
          className={props.ClassNames.genderMale}
          onClick={props.maleHandler}
        >
          Male
        </button>
        <button
          className={props.ClassNames.genderFemale}
          onClick={props.FemaleHandler}
        >
          Female
        </button>
      </div>
    </div>
  );
}

export default Gender;
