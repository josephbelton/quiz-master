import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get('http://localhost:4000/').then(response => {
      setMessage(response.data)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/login', { username: username, password: password }).then(response => {
      setUser(response.data)
    })
  }

  return (
    <div>
      <header >
        <p>{message}</p>
        {user.username
          ? <p>hi {user.username}</p>
          : (
            <form onSubmit={handleSubmit} autoComplete="off">
              <input type="text" onChange={(e) => setUsername(e.target.value)} />
              <input type="password" onChange={(e) => setPassword(e.target.value)} />
              <button>submit</button>
            </form>
          )}

      </header>
    </div>
  );
}

export default App;
