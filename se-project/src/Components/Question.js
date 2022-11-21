import React, { useState, useEffect } from "react";
import AnswerChoice from "./AnswerChoice";

function Question({ question, show }) {
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    console.log("Answered?: ", answered);
  }, [answered]);

  return (
    <div
      className="question__container"
      style={{ display: show ? "block" : "none" }}
    >
      <div>
        <h2>{question.question}</h2>
      </div>
      <br />
      <div>
        {question.answers.map((a, idx) => (
          <AnswerChoice
            style={{ padding: "20px" }}
            answer={a}
            key={idx}
            answered={answered}
            setAnswered={setAnswered}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
