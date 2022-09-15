import React from "react";
import "./UserAWH.css";
function UserAWH(props) {
  return (
    <div className="age-weight-height">
      <input
        placeholder="Age"
        value={props.userData.age}
        onChange={props.inputAgeChangeHandler}
      />
      <input
        placeholder="Weight (KG)"
        value={props.userData.weight}
        onChange={props.inputWeightChangeHandler}
      />
      <input
        placeholder="Height (CM)"
        value={props.userData.height}
        onChange={props.inputHeightChangeHandler}
      />
    </div>
  );
}

export default UserAWH;
