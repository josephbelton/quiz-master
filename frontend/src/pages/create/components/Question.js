import React, { useState } from 'react'
import times from 'lodash.times'
import Answer from './Answer'

const Question = ({ questionNumber, handleChange }) => {
    const [numberOfAnswers, setNumberOfAnswers] = useState(0)

    return (
        <div>
            <p>Question {questionNumber}</p>
            <input type="text" name={`question-${questionNumber}`} onChange={handleChange} />
            <input type="number" name={`how-many-answers-${questionNumber}`} onChange={(e) => setNumberOfAnswers(e.target.value)} placeholder="how many answers?" />
            <input type="number" name={`correct-answer-for-question-${questionNumber}`} placeholder="correct answer" max={numberOfAnswers} onChange={handleChange} />
            {times(numberOfAnswers, (n) => {
                return (
                    <Answer questionNumber={questionNumber} answerNumber={n + 1} handleChange={handleChange} />
                )
            })}
        </div>
    )
}

export default Question
