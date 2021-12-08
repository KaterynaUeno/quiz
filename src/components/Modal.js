import React from "react";

const Modal = ({ close, results, data }) => {
  return (
    <div className="container" onClick={close}>
      <h2>Your answer:</h2>

      <section className="card-content">
        <ul>
          {results.map((result, index) => {
            return (
              <li key={index}>
                {result.q} Your answer: {data[index].answer}
                <h3>Correct answer: {data[index].answer}</h3>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Modal;
