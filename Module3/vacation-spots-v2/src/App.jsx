import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Spots from './components/Spots'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header className="vacation--header"/>
      <div className='spot--card'>
        <Spots />
      </div>
    </>
  )
}

export default App
