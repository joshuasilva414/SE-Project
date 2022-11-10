import React from 'react'

function AnswerChoice({answer}) {
  return (
    <div className="answer-choice__container"><h3>{answer.option} {"<--"} {answer.isCorrect ? "Correct":"Incorrect"}</h3></div>
  )
}

export default AnswerChoice