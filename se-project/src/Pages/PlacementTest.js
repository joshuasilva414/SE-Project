import React, { useEffect, useState } from "react";
import Question from "../Components/Question";
import questions from "../Data/TestData";

function PlacementTest() {
  const [index, setIndex] = useState(0);

  const changeIndex = (val) => {
    let numQuestions = questions.length;
    setIndex((currentIndex) =>
      Math.min(Math.max(currentIndex + val, 0), numQuestions - 1)
    );
  };

  useEffect(() => {
    console.log("New question index:", index);
  }, [index]);

  return (
    <div>
      <h1>Placement Test</h1>
      <div className="test__container">
        {questions.map((q, idx) => (
          <Question question={q} key={idx} show={idx === index} />
        ))}
      </div>
      <div className="question-nav__container">
        <button onClick={() => changeIndex(-1)}>Previous</button>
        <button onClick={() => changeIndex(+1)}>Next</button>
      </div>
    </div>
  );
}

export default PlacementTest;
