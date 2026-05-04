import React from 'react'
import './Services.scss'

const Services = () => {
  return (
    <section id='services'>
        <hr className='mt-5'/>
          <h2 className="text-center  shadow spa">Services</h2>
            <div className="container" id='faah'>
          <div className="row g-5" >
            <div className="col-12">
              <div data-aos="fade-right" className="card9 text-center">
                <h4 >Responsive Website Development</h4>
                <p >Build websites that look perfect on desktop, tablet, and mobile devices.</p>
              </div>
            </div>
            <div className="col-12 ">
              <div data-aos="fade-left" className="card10  text-center">
                <h4 >UI / Frontend Improvement / Redesign</h4>
                <p>Improve existing website design, fix layout issues, and enhance user experience.</p>
              </div>
            </div>
            <div className="col-12 ">
              <div data-aos="fade-right" className="card11 text-center ">
                <h4>Website Bug Fixing & Optimization</h4>
                <p >Identify and fix layout issues, broken links, slow loading, or mobile responsiveness.</p>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-12">
              <div data-aos="fade-left" className="card12 text-center">
                <h4 >Web Design</h4>
                <p>I've worked on web applications. I've worked on Material UI, React, Firebase and many more.</p>
              </div>
            </div>
            <div className="col-12 ">
              <div data-aos="fade-right" className="card13 text-center">
                <h4 >Portfolio / Personal Website</h4>
                <p >Build a personal website or portfolio for professionals, freelancers, or creatives.</p>
              </div>
            </div>
            <div className="col-12">
              <div data-aos="fade-left" className="card14 text-center">
                <h4 >Landing Page Design</h4>
                <p >Create high-converting landing pages for products, startups, or promotions</p>
              </div>
            </div>
          </div>
        </div>


    </section>
  )
}

export default Services