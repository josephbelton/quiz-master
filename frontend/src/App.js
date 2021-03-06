import { useState, useEffect } from 'react'
import axios from 'axios'
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Quiz from './pages/quiz/Quiz';

import { Router, useNavigate } from '@reach/router';

import './index.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [user, setUser] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:4000/', { withCredentials: true }).then(response => {
      setUser(response.data)
    })
  }, [])

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/login', { username: username, password: password }, { withCredentials: true }).then(response => {
      setUser(response.data)
      navigate('/')
    })
  }

  const handleLogout = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:4000/logout', { withCredentials: true }).then(response => {
      setUser({})
      navigate('/login')
    })
  }

  return (
    <main>
      <Router>
        <Quiz path="quiz/:name" user={user} />
        <Dashboard path="/" user={user} handleLogout={handleLogout} />
        <Create path="/create" user={user} />
        <Login path="login" user={user} handleUsernameChange={handleUsernameChange} handlePasswordChange={handlePasswordChange} handleSubmit={handleSubmit} />
      </Router>
    </main>
  );
}

export default App;
