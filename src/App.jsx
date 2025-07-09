import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import bg from "./assets/hero-bg.jpg"
import bg3 from "./assets/bg3.avif";
import "./App.css"
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Project from './components/Projects/Project'
import Contact from './components/Contact/Contact';
import Navbar from './components/NavBar/Navbar';
import Experience from './components/Experience/Experience';
export default function App() {
  return (
    <>
    <div>
      {/* Hero Section */}
      <div className='bgg'>
        <img className='hero-bg' src={bg} alt="hero-bg" />
      </div>
  
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      {/* Main Section with Background */}
      <div className='main'>
        <div className='hero-bgg-container'>
          <img className='hero-bgg' src={bg3} alt="hero-bg" />
        </div>
        <div className='content'>
          <Experience />
          <Services />
          <Project />
          <Contact />
        </div>

        <div className='footer'>
          <p>Made with ❤️ by <span className='name'>Priyansh Saxena</span></p>
        </div>
      </div>
    </div>
  </>
  )
}
