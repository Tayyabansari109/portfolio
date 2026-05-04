import React from 'react'
import './Header.scss'
import "bootstrap/dist/js/bootstrap"


const Header = () => {



  return (
    <nav className="navbar navbar-expand-lg navbar-dark top-0 start-0 w-100" id='nov'>
  <div className="container">
    <a className="navbar-brand" href="#"><span className="fw-bold shadow" id='Personal'>𝒫𝑒𝓇𝓈𝑜𝓃𝒶𝓁 𝒫𝑜𝓇𝓉𝒻𝑜𝓁𝒾𝑜</span> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 shadow ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#hero">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#contact">Contact</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Header