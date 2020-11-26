import React from 'react'
import { Redirect } from '@reach/router';
import { Paper, Input, Button } from '@material-ui/core';
import './login.css'
const Login = ({ handleUsernameChange, handlePasswordChange, handleSubmit, user }) => {
    if (user.username) { return <Redirect noThrow={true} to="/" /> }

    return (
        <div style={{ backgroundColor: 'DodgerBlue', height: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <Paper elevation={3} >
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div style={{ display: 'flex', flexDirection: 'column', margin: '3rem' }}>
                            <Input type="text" onChange={handleUsernameChange} placeholder="username" />
                            <Input type="password" onChange={handlePasswordChange} placeholder="password" />
                            <Button type="submit">Login</Button>
                        </div>
                    </form>
                </Paper>
            </div>
        </div>
    )
}

export default Login
