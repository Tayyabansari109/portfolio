import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header/index"
import Hero from "./pages/Hero/Hero"
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Services from './pages/Services/Services'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import Footer from "./components/Footer/index"
import './App.scss'

const App = () => {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </main>
    <Footer />
    </>
  )
}

export default App