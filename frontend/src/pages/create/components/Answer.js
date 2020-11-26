import React from 'react'

const Answer = ({ questionNumber, answerNumber, handleChange }) => {
    return (
        <div>
            <p>{answerNumber}</p><input type="text" name={`answer-${answerNumber}-for-question-${questionNumber}`} onChange={handleChange} />
        </div>
    )
}

export default Answer
