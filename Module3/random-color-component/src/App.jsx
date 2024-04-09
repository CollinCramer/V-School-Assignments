import React, { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [randomColor, setRandomColor] = useState({
    _id:"",
    name:"",
    hex:"",
    rgb:"",
    __v:"",
  })

  useEffect(function() {
    fetch("https://random-color.onrender.com/colors/random")
      .then(res => res.json())
      .then(color => setRandomColor(color))
  }, [])
console.log(randomColor)
  return (
    <div>
      <h1
      style={{backgroundColor:randomColor.hex}}
      >
      Hello World
      </h1>
    </div>
  )
}

export default App
