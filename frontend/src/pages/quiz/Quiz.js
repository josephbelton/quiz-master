import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Redirect } from '@reach/router';

const Quiz = ({ name, user }) => {
    const [quiz, setQuiz] = useState({})
    const [showAnswers, setShowAnswers] = useState(false)

    useEffect(() => {
        axios.post('http://localhost:4000/quizByName', { name: name }, { withCredentials: true }).then(response => {
            setQuiz(response.data)
        })
    }, [])

    if (!user.username) { return <Redirect noThrow={true} to="/login" /> }

    const renderQuiz = () => {
        if (Object.keys(quiz).length === 0 && quiz.constructor === Object) return null;

        return (
            <div key={quiz.name}>
                {Object.values(quiz.questions).map((question) => {
                    return (
                        <div key={question.title}>
                            <p>{question.title}</p>
                            {question.answers.map((answer, index) => {
                                return (
                                    <div>
                                        <p key={answer.title}> - {answer.title} {(showAnswers && question.correct_answer === index + 1) && <p> -- ✅</p>}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            <Link to={`/`}>Back to Dashboard</Link>
            {user.role !== "restrict" && <button onClick={() => setShowAnswers(true)}>Show Answers</button>}
            <h1>{name}</h1>
            {renderQuiz()}
        </div >
    )
}

export default Quiz
