import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Games from './components/Games'
import Books from './components/Books'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
      <Header />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/games" element = {<Games />} />
          <Route path = "/books" element = {<Books />} />
        </Routes>
      </>
    </>
  )
}

export default App
