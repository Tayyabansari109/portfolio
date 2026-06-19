import React from 'react'
import './Hero.scss'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
// import { Spotlight } from '../../component1/ui/spotlight';
// import { SplineScene } from '../../component1/ui/splite';
import { Spotlight } from '../../component1/u1/spotlight';
import { SplineScene } from '../../component1/u1/splite';



const Hero = () => {
  return (
    
    <section id='hero' className="relative ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Left — your existing card */}
      <div data-aos="flip-left" className="card">
        <h1 className='text-white text-center shadow'>Hi, I'm Muhammad Tayyab</h1>
        <p className='highlight'>I'm a Frontend Developer</p>
        <Link to="/portfolio/resume">
          <button id='button'>View Resume</button>
        </Link>
      </div>

      {/* Right — 3D Robot */}
      <div className="robot-container">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

    </section>
  )
}

export default Hero