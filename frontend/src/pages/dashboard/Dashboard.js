import React from 'react'
import { Redirect } from '@reach/router';

const Dashboard = ({ user, handleLogout }) => {
    if (!user.username) { return <Redirect noThrow={true} to="/login" /> }

    return (
        <div>
            <p>hi {user.username && user.username}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard
