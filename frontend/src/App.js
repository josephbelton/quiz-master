import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get('http://localhost:4000/').then(response => {
      setMessage(response.data[0].username)
    })
  }, [])
  return (
    <div>
      <header >
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
