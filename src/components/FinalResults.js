import React from "react";

const FinalResults = ({ close, results, data }) => {
  return (
    <div className="card" onClick={close}>
      <p>Your answers</p>
      <button className="btn" onClick={close}></button>
      <div className="content">
        <ul>
          {results.map((result, index) => {
            <li key={index}>{result.q}</li>;
            <p
              className={
                result.a ===
                data[
                  index.answer
                    ? "backgroundColor:white"
                    : "backgroundColor: blue"
                ]
              }
            >
              Your answer: {result.a}
            </p>;
            {
              result.a !== data[index].answer && (
                <p className="pink">Correct answer{data[index].answer}</p>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default FinalResults;
