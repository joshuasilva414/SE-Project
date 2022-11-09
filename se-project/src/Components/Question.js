import React from 'react';
import AnswerChoice from "./AnswerChoice";

function Question({question}) {
  return (
    <>
        <div>{question.question}</div>
        <br />
        <div>
            {
                question.answers.map(a => (
                    <AnswerChoice answer={a} />
                ))
            }
        </div>
    </>
  )
}

export default Question