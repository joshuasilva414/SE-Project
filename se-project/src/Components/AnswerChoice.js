import React from 'react'

function AnswerChoice({answer}) {
  return (
    <div>{answer.option} {"<--"} {answer.isCorrect ? "Correct":"inCorrect"}</div>
  )
}

export default AnswerChoice