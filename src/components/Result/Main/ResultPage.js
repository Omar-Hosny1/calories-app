import React, { useEffect, useState } from "react";
import "./Result.css";
import Calories from "../Calories/Calories";
import Advice from "../Advice/Advice";
import Dishes from "../Disches/Dishes";

export default function ResultPage({ data }) {
  const [show, setShown] = useState(false);

  useEffect(() => {
    if (data.gender === null) {
      setShown(false);
    } else {
      setShown(true);
    }
  }, [data]);

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
