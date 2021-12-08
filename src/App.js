import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import data from "./data";
import Start from "./components/Start";
import Qestion from "./components/Question";
const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answer, setAnswer] = useState([]);

  const start = () => {
    setStep(2);
  };
  return (
    <div className="App">
      {step === 1 && <Start start={start} />}
      {step === 2 && (
        <Qestion
          data={data[activeQuestion]}
          onAnswer={setAnswer}
          numberOfQuestions={data.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
    </div>
  );
};

export default App;
