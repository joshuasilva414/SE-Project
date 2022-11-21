import React, { useEffect } from "react";

function AnswerChoice({ answer, answered, setAnswered }) {
  useEffect(() => {
    console.log("answered?: ", answered);
  });

  if (answered) {
    return (
      <div
        className={
          "answer-choice__container " +
          (answer.isCorrect ? "correct" : "incorrect")
        }
        onClick={() => {
          setAnswered(true);
        }}
      >
        <h3>{answer.option}</h3>
      </div>
    );
  } else {
    return (
      <div
        className="answer-choice__container"
        onClick={() => {
          setAnswered(true);
        }}
      >
        <h3>{answer.option}</h3>
      </div>
    );
  }
}

export default AnswerChoice;
