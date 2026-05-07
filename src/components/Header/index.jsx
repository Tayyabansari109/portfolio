import React, { useState } from 'react'
import './Header.scss'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">

      <div className="container">

        <div className="logo shadow">
          𝙈𝙔 𝙋𝙊𝙍𝙏𝙁𝙊𝙇𝙄𝙊
        </div>

        <nav className="shadow" className={menuOpen ? "nav active" : "nav"}>

          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>

        </nav>

        <div
          className={menuOpen ? "menu-btn active" : "menu-btn"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </header>
  )
}

export default Header