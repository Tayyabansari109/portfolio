import React from 'react'
import './Portfolio.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faDesktop } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <section id='portfolio'> 
    <div>
     <h1 className="text-center shadow spa">Portfolio</h1>
    </div>

    <div className="card15" style={{ width: '18rem' }}>
        <div className="card-body">
          <img src="src\assets\Modern E-commerce Frontend as YouTube Thumbnail.png" alt="" />
          <h4 className="card-title mt-3 text-center">Affliate Website</h4>
          <p className="card-text mt-3 m-4">This Website is made on React JS and Integration on Google Firebase</p>
          <a href="https://prime-select-weld.vercel.app/" target="_blank"  className="card-link"><FontAwesomeIcon icon={faDesktop} className='ico' /></a>
        </div>
    </div>



    </section>
  )
}

export default Portfolio