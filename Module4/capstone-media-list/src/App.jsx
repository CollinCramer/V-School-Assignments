
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import { ThemeContextProvider } from './ThemeContext'
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom';
import Television from './components/Television';
import Movies from './components/Movies';
import TelevisionPopular from './components/TelevisionPopular';
import MoviePopular from './components/MoviePopular';
import React from 'react'

function App() {
  


  return (
    <>
      <ThemeContextProvider>
        <Header />
          <Routes>
            <Route path = "/" element = {<Main />} />
            <Route path = "/tv" element = {<Television />} />
            <Route path = "/movies" element = {<Movies />} />
            <Route path = "/tv/popular" element = {<TelevisionPopular />} />
            <Route path = "/movies/popular" element = {<MoviePopular />} />
          </Routes>
        <Footer />  
      </ThemeContextProvider>
    </>
  )
}

export default App
