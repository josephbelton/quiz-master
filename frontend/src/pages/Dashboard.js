import React from 'react'

const Dashboard = ({ user, handleLogout }) => {
    return (
        <div>
            <p>hi {user.username}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard
