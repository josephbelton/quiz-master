import React from 'react'
import { Redirect } from '@reach/router';

const Login = ({ handleUsernameChange, handlePasswordChange, handleSubmit, user }) => {
    if (user.username) { return <Redirect noThrow={true} to="/" /> }

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
