import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Redirect } from '@reach/router';
import { AppBar, Button } from '@material-ui/core';
import './quiz.css';

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
            <div key={quiz.name} className="quiz-quiz-container">
                {Object.values(quiz.questions).map((question) => {
                    return (
                        <div key={question.title}>
                            <b>{question.title}</b>
                            {question.answers.map((answer, index) => {
                                return (
                                    <div>
                                        {(showAnswers && question.correct_answer === index + 1) ? (
                                            <div className="correct-answer"><p key={answer.title}> {index + 1} ) {answer.title}</p></div>
                                        ) : (
                                                <div className="answer"><p key={answer.title}> {index + 1} ) {answer.title}</p></div>
                                            )}
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
            <AppBar position="static">
                <div className="quiz-menu-container">
                    <h3>WebbiSkools LTD Quiz Master</h3>
                    <Link to={`/`}><Button color="white" variant="contained">Back To Dashboard</Button></Link>
                </div>
            </AppBar>
            <div className="quiz-page-container" style={{ backgroundColor: 'dodgerblue' }}>
                <h1 style={{ color: 'white' }}>{name}</h1>
                {(user.role !== "restrict" && !showAnswers) && <Button color="white" variant="contained" onClick={() => setShowAnswers(true)}>Show Answers</Button>}
                {renderQuiz()}
            </div>
        </div >
    )
}

export default Quiz
