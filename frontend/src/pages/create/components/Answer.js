import React from 'react'
import { Input } from '@material-ui/core';

const Answer = ({ questionNumber, answerNumber, handleChange }) => {
    return (
        <div>
            <Input type="text" name={`answer-${answerNumber}-for-question-${questionNumber}`} onChange={handleChange} placeholder={`answer ${answerNumber}`} />
        </div>
    )
}

export default Answer
