import React, { useEffect, useState } from "react";
import "./Result.css";
import Calories from "../Calories/Calories";
import Advice from "../Advice/Advice";
import Dishes from "../Disches/Dishes";

export default function ResultPage({ data, div }) {
  const [show, setShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (data.gender === null || div?.current.className === "user-data-form") {
        setShown(false);
      } else {
        setShown(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [data, div]);

  return (
    <div className="result-pg">
      {show && (
        <>
          <Calories data={data} />
          <Advice goal={data.goal} />
          <Dishes />{" "}
        </>
      )}
    </div>
  );
}
