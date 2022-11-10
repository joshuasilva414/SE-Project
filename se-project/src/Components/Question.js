import React from 'react';
import AnswerChoice from "./AnswerChoice";

function Question({question, show}) {
  return (
    <div className={"question__container" + show ? "active":""}>
        <div><h2>{question.question}</h2></div>
        <br />
        <div>
            {
                question.answers.map(a => (
                    <AnswerChoice answer={a}/>
                ))
            }
        </div>
    </div>
  )
}

export default Question