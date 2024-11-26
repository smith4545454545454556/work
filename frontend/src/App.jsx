import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get("/api/jokes").then((response) => {
      console.log(response, "response")
      setJokes(response.data)
    }).catch((error) => {
      console.log(error)
    })

  }, [])

  return (
    <>
      <p>{jokes.length}</p>
      <div>
        {jokes.map((joke) => (
          <p key={joke.id}>{joke.content}</p>
        ))}
      </div>

    </>
  )
}

export default App
