import React from 'react'
import './Portfolio.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faDesktop } from "@fortawesome/free-solid-svg-icons";
import affliate from '../../assets/affliate.png';
import fiverr1 from '../../assets/fiverr1.png';
import fiverr2 from '../../assets/fiverr2.png';
import fiverr3 from '../../assets/fiverr3.png';

const Portfolio = () => {
  return (
    <section id='aboutme'> 
    <div>
     <h1 className="text-center shadow spa">Portfolio</h1>
    </div>

    <div data-aos="zoom-in" className="card15" style={{ width: '18rem' }}>
        <div className="card-body">
          <img src={affliate} alt="affiliate" />
          <h4 className="card-title mt-3 text-center">Affliate Website</h4>
          <p className="card-text mt-3 m-4">This Website is made on React JS and Integration on Google Firebase</p>
          <a href="https://prime-select-weld.vercel.app/" target="_blank"  className="card-link"><FontAwesomeIcon icon={faDesktop} className='ico' /></a>
        </div>
    </div>

    <div className='' > 
      <h1 className=" text-center shadow spa"> Fiverr Gigs </h1>
    </div>

    <div className="container">

      <div className="row g-4 justify-content-center">
      <div data-aos="zoom-in-up" className=" col-12 col-md-6 col-lg-4 card15" >
        <div className="card-body">
          <img src={fiverr1} alt="affiliate" />
          <h4 className="card-title mt-3 text-center">Fiverr Gig</h4>
          <p className="card-text mt-3 m-4">I will convert figma, PSD, xd landing pages to HTML CSS bootstrap</p>
          <a href="https://www.fiverr.com/s/kLPZmvy" target="_blank"  className="card-link"><FontAwesomeIcon icon={faDesktop} className='ico' /></a>
        </div>
    </div>

    <div data-aos="zoom-in" className="col-12 col-md-6 col-lg-4  card15" >
        <div className="card-body">
          <img src={fiverr2} alt="affiliate" />
          <h4 className="card-title mt-3 text-center">Fiverr Gig</h4>
          <p className="card-text mt-3 m-4">I will develop a responsive react js frontend website</p>
          <a href="https://www.fiverr.com/s/42vB1Ab" target="_blank"  className="card-link"><FontAwesomeIcon icon={faDesktop} className='ico' /></a>
        </div>
    </div>

    <div data-aos="zoom-in-up" className="col-12 col-md-6 col-lg-4  card15" >
        <div className="card-body">
          <img src={fiverr3} alt="affiliate" />
          <h4 className="card-title mt-3 text-center">Fiverr Gig</h4>
          <p className="card-text mt-3 m-4">I will fix HTML, CSS and javascript bugs and errors in your website</p>
          <a href="https://www.fiverr.com/s/Q78Lx5w" target="_blank"  className="card-link"><FontAwesomeIcon icon={faDesktop} className='ico' /></a>
        </div>
    </div>

      </div>
  </div>
 
    </section>
  )
}

export default Portfolio