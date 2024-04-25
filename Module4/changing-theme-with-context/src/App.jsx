import { useState } from 'react'
import Header from './Header'
import './App.css'
import Footer from './Footer'
import PageContents from './PageContents'
import {ThemeContextProvider} from './themeContext'

function App(props) {


  return (
    <>
      <ThemeContextProvider>
        <Header />
        <PageContents />
        <Footer />
      </ThemeContextProvider>  
    </>
  );
}

export default App
