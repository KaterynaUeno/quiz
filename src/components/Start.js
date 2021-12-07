import React from "react";
import "./style.css";

const Start = ({ start }) => {
  return (
    <div className="card">
      <div className="main">
        <div className="content">
          <h2>Let's start the quiz</h2>
          <button className="btn" onClick={start}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};
export default Start;
