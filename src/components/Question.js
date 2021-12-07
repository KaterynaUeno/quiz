import React, { useState, useRef, useEffect } from "react";
import "./styleStart.css";

const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const nextClick = (e) => {};
  return (
    <div className="card">
      <div className="main">
        <div className="content">
          <h2>Question</h2>
          <label className="label">
            <input type="radio" name="answer"></input>
            Choice
          </label>
          <label className="label">
            <input type="radio" name="answer"></input>
            Choice
          </label>
          <label className="label">
            <input type="radio" name="answer"></input>
            Choice
          </label>
        </div>
        <div className="error"> error</div>
        <button className="btn" onClick={() => nextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
