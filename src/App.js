import "./App.css";
import React, { useState } from "react";
import data from "./data";
import Start from "./components/Start";
import Question from "./components/Question";
import Result from "./components/Result";
import Modal from "./components/Modal";

const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const start = () => {
    setStep(2);
  };

  const startAgain = () => {
    setActiveQuestion(0);
    setAnswer([]);
    setStep(1);
    setShow(false);
  };
  return (
    <div className="App">
      {step === 1 && <Start start={start} />}
      {step === 2 && (
        <Question
          data={data[activeQuestion]}
          onAnswer={setAnswer}
          numberOfQuestions={data.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && (
        <Result
          results={answer}
          data={data}
          startAgain={startAgain}
          checkAnswers={() => setShow(true)}
        />
      )}
      {show && (
        <Modal
          close={() => setShow(false)}
          results={answer}
          data={data}
          handleClose={handleClose}
          handleShow={handleShow}
        />
      )}
    </div>
  );
};

export default App;
