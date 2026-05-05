import React from 'react'
import './Header.scss'
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"


const Header = () => {

const closeMenu = () => {
  const nav = document.getElementById("nav");
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
};

  return (
    <nav className="navbar navbar-expand-lg navbar-dark top-0 start-0 w-100" id='nov'>
  <div className="container">
    <a className="navbar-brand" href="#"><span className="fw-bold shadow" id='Personal'>MY 𝒫𝑜𝓇𝓉𝒻𝑜𝓁𝒾𝑜</span> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
      <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item fw-bold"><a className="nav-link" href="#home" onClick={closeMenu}>Home</a></li>
              <li className="nav-item fw-bold"><a className="nav-link" href="#about" onClick={closeMenu}>About</a></li>
              <li className="nav-item fw-bold"><a className="nav-link" href="#skills" onClick={closeMenu}>Skills</a></li>
              <li className="nav-item fw-bold"><a className="nav-link" href="#services" onClick={closeMenu}>Services</a></li>
              <li className="nav-item fw-bold"><a className="nav-link" href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
              <li className="nav-item fw-bold"><a className="nav-link" href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </div>

  </div>
</nav>
  )
}

export default Header