import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { data } from "./quizData";
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
      < step === 1 && Start start={start} />
      <Qestion />
    </div>
  );
};

export default App;
