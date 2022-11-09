import React from 'react';
import Question from '../Components/Question';
import questions from "../Data/TestData";

function PlacementTest() {
  return (
    <div>
        <h2>Placement Test</h2>
        <div>
            {
                questions.map(q => (
                    <>
                        <Question question={q}/>
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