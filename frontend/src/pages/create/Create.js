import React, { useState } from 'react'
import axios from 'axios'
import times from 'lodash.times'
import Question from './components/Question'
import { Link, Redirect } from '@reach/router';

const Create = ({ user }) => {
    const [numberOfQuestions, setNumberOfQuestions] = useState(0)
    const [formData, updateFormData] = useState({})

    if (!user.username) { return <Redirect noThrow={true} to="/login" /> }

    const handleChange = (e) => {
        updateFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const headers = {
        'Content-Type': 'application/json',
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let questionCount = 0;
        Object.keys(formData).map(item => {
            if (item.startsWith("question-")) { questionCount++ }
        })

        let object = {
            name: formData['quiz-name'],
            questions: []
        }
        times(questionCount, (n) => {
            let question = {
                title: formData[`question-${n + 1}`],
                correct_answer: parseInt(formData[`correct-answer-for-question-${n + 1}`]),
                answers: []
            }

            let answerCount = 0;
            Object.keys(formData).map(item => {
                if (item.startsWith('answer') && item.endsWith(`for-question-${n + 1}`)) { answerCount++ }
            });

            times(answerCount, (a) => {
                question.answers.push({ title: formData[`answer-${a + 1}-for-question-${n + 1}`] })
            })

            object.questions.push(question);
        });

        console.log(object)

        axios.post('http://localhost:4000/quiz', { ...object }, { withCredentials: true }, { headers: headers }).then((response) => console.log(response.data))
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <form id="create" autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="quiz-name" placeholder="quiz name" onChange={handleChange} />
                <input type="number" onChange={(e) => setNumberOfQuestions(e.target.value)} name="amount-questions" placeholder="number of questions" />
                {times(numberOfQuestions, (n) => {
                    return (
                        <Question questionNumber={n + 1} handleChange={handleChange} />
                    )
                })}
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Create
