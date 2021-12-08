import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import data from "./data";
import Start from "./components/Start";
import Question from "./components/Question";
import Result from "./components/Result";
import FinalResults from "./components/FinalResults";
const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answer, setAnswer] = useState([]);

  const start = () => {
    setStep(2);
  };

  const startAgain = () => {
    setActiveQuestion(0);
    setAnswer([]);
    setStep(1);
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
          checkAnswers={() => <FinalResults />}
        />
      )}
      {step === 4 && <FinalResults results={answer} data={data} />}
    </div>
  );
};

export default App;
