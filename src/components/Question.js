import React, { useState, useRef, useEffect } from "react";
import "./styleStart.css";
// import data from "../data";

const Question = ({
  data,
  onAnswer,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const { question, choices, answer } = data;
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();

  useEffect(() => {
    const checkedInput = radiosWrapper.current.querySelector("input:checked");
    if (checkedInput) {
      checkedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };
  const nextClick = (e) => {
    if (selected === "") {
      return setError("Please choose one answer");
    }
    onAnswer((prevState) => [...prevState, { q: question, a: selected }]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };
  return (
    <div className="card">
      <div className="main">
        <div className="content">
          <h2>{question}</h2>
          <div className="control" ref={radiosWrapper}>
            {choices.map((choice, index) => {
              return (
                <label className="label" key={index}>
                  <input
                    type="radio"
                    name="answer"
                    value={choice}
                    onChange={changeHandler}
                  />
                  {choice}
                </label>
              );
            })}
          </div>
          {error && <div className="error">{error}</div>}
          <button className="btn" onClick={nextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
