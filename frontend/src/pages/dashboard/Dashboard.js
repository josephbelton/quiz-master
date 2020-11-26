import React, { useState, useEffect } from 'react'
import { Redirect, Link } from '@reach/router';
import axios from 'axios';

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
            console.log(quiz)
            return (
                <div key={quiz.name}>
                    <Link to={`/quiz/${quiz.name}`}>{quiz.name}</Link>
                    <p>This Quiz has {quiz.questions.length} questions</p>
                </div>
            )
        })
    }

    return (
        <div>
            <p>hi {user.username && user.username}</p>
            <button onClick={handleLogout}>Logout</button>
            <Link to="/create">Create</Link>
            {renderQuizzes()}
        </div >
    )
}

export default Dashboard
