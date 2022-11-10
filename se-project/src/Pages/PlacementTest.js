import React, { useState } from 'react';
import Question from '../Components/Question';
import questions from "../Data/TestData";

function PlacementTest() {
    const [index, setIndex] = useState(0);
  return (
    <div>
        <h1>Placement Test</h1>
        <div className="test__container">
            {
                questions.map( (q, idx) => (
                    <>
                        <Question question={q} show={idx === index}/>
                        <br />
                        <br />
                    </>
                ))
            }
        </div>
    </div>
  )
}

export default PlacementTest