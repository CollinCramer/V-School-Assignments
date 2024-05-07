import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import { ThemeContextProvider } from './ThemeContext'
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom';

function App() {
  


  return (
    <>
      <ThemeContextProvider>
        <Header />
          <Routes>
            <Route path = "/" element = {<Main />} />
          </Routes>
        <Footer />  
      </ThemeContextProvider>
    </>
  )
}

export default App
