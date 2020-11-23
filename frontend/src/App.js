import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get('http://localhost:4000/').then(response => {
      console.log(response)
      setMessage(response.data)
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
