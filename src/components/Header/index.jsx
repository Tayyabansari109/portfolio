import React from 'react'
import './Header.scss'
import "bootstrap/dist/js/bootstrap.bundle.min"

const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark top-0 start-0 w-100" id='nov'>
  <div className="container">
    <a className="navbar-brand" href="#"><span className="fw-bold shadow" id='Personal'>MY 𝒫𝑜𝓇𝓉𝒻𝑜𝓁𝒾𝑜</span> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item fw-bold"><a className="nav-link" href="#hero" >Home</a></li>
              <li className="nav-item fw-bold"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item fw-bold"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item fw-bold"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item fw-bold"><a className="nav-link" href="#portfolio">Portfolio</a></li>
              <li className="nav-item fw-bold"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>

  </div>
</nav>
  )
}

export default Header