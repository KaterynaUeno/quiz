import React, { useEffect, useState } from "react";
import AnotherModal from "./AnotherModal";

const Result = ({ data, results, startAgain, checkAnswers }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correctAnswer = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correctAnswer++;
      }
    });
    setCorrectAnswers(correctAnswer);
  }, []);
  return (
    <div className="card">
      <div className="card-container">
        <div className="content">
          <h1>Your result</h1>
          <p>
            {correctAnswers} of {data.length}
          </p>
          <button class="btn" onClick={checkAnswers}>
            Check answers
          </button>
          <button className="btn" onClick={startAgain}>
            Start again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
