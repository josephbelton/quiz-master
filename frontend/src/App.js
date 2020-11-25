import { useState, useEffect } from 'react'
import axios from 'axios'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [user, setUser] = useState({})

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
    })
  }

  const handleLogout = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:4000/logout', { withCredentials: true }).then(response => {
      setUser({})
      setMessage(response.data)
    })
  }

  return (
    <main>
      <p>{message}</p>
      {user.username
        ? (
          <Dashboard user={user} handleLogout={handleLogout} />
        )
        : (
          <Login handleUsernameChange={handleUsernameChange} handlePasswordChange={handlePasswordChange} handleSubmit={handleSubmit} />
        )}
    </main>
  );
}

export default App;
