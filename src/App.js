import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HelloSetion from "./components/UserData/Hello/HelloSetion";
import ResultPage from "./components/Result/Main/ResultPage";
import UserDataForm from "./components/UserData/UserDataForm/UserDataForm";

function App() {
  const [data, setData] = useState({});

  const calculateCaloriesHandler = (userData) => {
    setData({
      activity: userData.activity,
      gender: userData.gender,
      goal: userData.goal,
      height: userData.height,
      weight: userData.weight,
      age: userData.age,
    });
  };
  return (
    <div className="App">
      <Header />
      <UserDataForm enteredUserData={calculateCaloriesHandler} />
      <HelloSetion />
      <ResultPage data={data} />
    </div>
  );
}

export default App;
