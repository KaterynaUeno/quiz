import React, { useEffect, useState } from "react";

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
          <button className="btn" onClick={checkAnswers}>
            Check your answers
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
