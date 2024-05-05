import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<Contact />} />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App
