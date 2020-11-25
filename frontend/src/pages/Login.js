import React from 'react'

const Login = ({ handleUsernameChange, handlePasswordChange, handleSubmit }) => {

    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete="off">
                <input type="text" onChange={handleUsernameChange} />
                <input type="password" onChange={handlePasswordChange} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Login
