import React, { useState, useEffect } from 'react'
import { Redirect, Link } from '@reach/router';
import axios from 'axios';
import { AppBar, Button, Paper } from '@material-ui/core';
import './dashboard.css'
const Dashboard = ({ user, handleLogout }) => {
    const [quizzes, setQuizzes] = useState({})


    useEffect(() => {
        axios.get('http://localhost:4000/quiz', { withCredentials: true }).then((response) => {
            setQuizzes(response.data)
        })
        return () => {
            setQuizzes({})
        }
    }, [])

    if (!user.username) {
        return <Redirect noThrow={true} to="/login" />
    }


    const renderQuizzes = () => {
        if (quizzes.length === 0) return null;

        return Object.values(quizzes).map((quiz) => {
            return (
                <Link to={`/quiz/${quiz.name}`}>
                    <div key={quiz.name} className="quiz-container" >
                        <h3>{quiz.name}</h3>
                        <p>This Quiz has {quiz.questions.length} questions</p>
                    </div>
                </Link>
            )
        })
    }

    return (
        <div>
            <AppBar position="static">
                <div className="menu-container">
                    <h3>WebbiSkools LTD Quiz Master</h3>
                    <Button onClick={handleLogout} color="white" variant="contained">Logout</Button>
                </div>
            </AppBar>

            <div className="page-container" style={{ backgroundColor: 'dodgerblue' }}>
                {user.role === 'edit' && <Link to="/create"><Button color="white" variant="contained">Create Quiz</Button></Link>}
                <h2 style={{ marginTop: 5, marginBottom: 5, padding: '1px', verticalAlign: 'center', color: "white" }}>Welcome {user.username && user.username} you have been given {user.role} privelidges</h2>
                <div className="quizzes-container">
                    {renderQuizzes()}
                </div>
            </div >
        </div>
    )
}

export default Dashboard
