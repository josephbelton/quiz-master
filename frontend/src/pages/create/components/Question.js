import React, { useState } from 'react'
import times from 'lodash.times'
import Answer from './Answer'
import { Input } from '@material-ui/core';

const Question = ({ questionNumber, handleChange }) => {
    const [numberOfAnswers, setNumberOfAnswers] = useState(0)

    return (
        <div>
            <p>Question {questionNumber}</p>
            <Input type="text" name={`question-${questionNumber}`} onChange={handleChange} placeholder="question" />{' '}
            <Input type="number" name={`how-many-answers-${questionNumber}`} onChange={(e) => setNumberOfAnswers(e.target.value)} placeholder="how many answers?" />{' '}
            <Input type="number" name={`correct-answer-for-question-${questionNumber}`} placeholder="correct answer" inputProps={{ max: numberOfAnswers }} onChange={handleChange} />
            {times(numberOfAnswers, (n) => {
                return (
                    <Answer questionNumber={questionNumber} answerNumber={n + 1} handleChange={handleChange} />
                )
            })}
        </div>
    )
}

export default Question
