import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HelloSetion from "./components/Hello/HelloSetion";
import UserDataForm from "./components/UserDataForm/UserDataForm";

function App() {
  const calculateCaloriesHandler = (userData) => {
    let { activity, gender, goal, height, weight } = userData;
  };
  return (
    <div className="App">
      <Header />
      <UserDataForm enteredUserData={calculateCaloriesHandler} />
      <HelloSetion />
    </div>
  );
}

export default App;
