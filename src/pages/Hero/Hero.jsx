import React from 'react'
import './Hero.scss'
import { Link } from 'react-router-dom';
// import { Spotlight } from '../../component1/u1/spotlight';

const Hero = () => {
  return (
    <section id='hero'>
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}

      {/* Left — Text Content */}
      <div className="hero-left" data-aos="fade-right">
        <h1 className="hero-heading">
          Hi, I'm <br />
          <span className="hero-name">Muhammad<br />Tayyab</span>
        </h1>
        <p className="hero-role">I'm a Frontend Developer</p>
        <Link to="/portfolio/resume">
          <button className="hero-btn">View Resume</button>
        </Link>
      </div>

      {/* Right — CSS Robot */}
      <div className=" robot-container" data-aos="fade-left">
        <div className="css-robot">

          <div className="robot-glow"></div>

          <div className="particle p1"></div>
          <div className="particle p2"></div>
          <div className="particle p3"></div>
          <div className="particle p4"></div>

          <div className="robot-body-wrap">

            {/* Antenna */}
            <div className="antenna-wrap">
              <div className="antenna-stem"></div>
              <div className="antenna-ball"></div>
            </div>

            {/* Head */}
            <div className="r-head">
              <div className="ear left"></div>
              <div className="ear right"></div>
              <div className="eyes">
                <div className="eye"></div>
                <div className="eye"></div>
              </div>
              <div className="mouth">
                <div className="mouth-bar"></div>
              </div>
            </div>

            {/* Neck */}
            <div className="r-neck"></div>

            {/* Torso */}
            <div className="torso-row">
              <div className="arm-group left-arm">
                <div className="shoulder"></div>
                <div className="upper-arm"></div>
                <div className="elbow"></div>
                <div className="lower-arm"></div>
                <div className="r-hand"></div>
              </div>

              <div className="r-body">
                <div className="scanline"></div>
                <div className="chest-panel">
                  <div className="chest-line"></div>
                  <div className="chest-line"></div>
                  <div className="chest-line"></div>
                </div>
                <div className="vent vent-left">
                  <div className="vent-slot"></div>
                  <div className="vent-slot"></div>
                  <div className="vent-slot"></div>
                </div>
                <div className="vent vent-right">
                  <div className="vent-slot"></div>
                  <div className="vent-slot"></div>
                  <div className="vent-slot"></div>
                </div>
              </div>

              <div className="arm-group right-arm">
                <div className="shoulder"></div>
                <div className="upper-arm"></div>
                <div className="elbow"></div>
                <div className="lower-arm"></div>
                <div className="r-hand"></div>
              </div>
            </div>

            {/* Waist */}
            <div className="r-waist">
              <div className="waist-dot"></div>
              <div className="waist-dot"></div>
              <div className="waist-dot"></div>
            </div>

            {/* Legs */}
            <div className="r-legs">
              <div className="leg-group left-leg">
                <div className="upper-leg"></div>
                <div className="knee"></div>
                <div className="lower-leg"></div>
                <div className="r-foot"></div>
              </div>
              <div className="leg-group right-leg">
                <div className="upper-leg"></div>
                <div className="knee"></div>
                <div className="lower-leg"></div>
                <div className="r-foot"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
