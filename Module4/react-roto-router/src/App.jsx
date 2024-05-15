import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {

  return (
    <div>
      <Header />
      <nav className="list--container">
            <Link to = "/" className = "link">
                Home
            </Link>
            <Link to = "/about" className="link">
                About
            </Link>
            <Link to = "/contact" className="link">
                Contact Us
            </Link>
        </nav>
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
