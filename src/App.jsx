import { useState } from "react"
import './App.css'

function App() {
  let [joke, setJoke] = useState('')

  const getJoke = async () => {
    const url = 'https://official-joke-api.appspot.com/random_joke'
    try{
      const response = await fetch(url)
      if (response.ok){
        const data = await response.json()
        setJoke(data.setup + ' ' + data.punchline)
      }else{
        console.log('Error:', response.status)
      }
    }catch(error){
      console.log('Error:', error)
    }
  }

  return (
    <>
     <h1>This is a test React App to display a random joke</h1>
     <button onClick={getJoke}>Get Joke</button>
     {joke && <p>{joke}</p>}
    </>
  )
}

export default App