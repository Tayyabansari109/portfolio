import React from 'react'
import './Hero.scss'
import { useState, useEffect } from "react";
import { Button } from 'antd';

function TextAnimation() {
  const texts = [" a Frontend Deve.", " a React Developer", " a Freelancer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2  className="highlight">
      I'm <span>{texts[index]}</span>
    </h2>
  );
}

const Hero = () => {
  return (
    <section id='hero'>
   <div className="card">
       <h1 className='text-white text-center shadow'>Hi, I'm Muhammad Tayyab</h1>

        <TextAnimation />
        <button id='button'>View Resume</button>
   </div>
   <div >
      <img className="image" src="src/assets/my_photo-removebg-preview-removebg-preview.png" alt="" />
  </div>
    </section>
    
  )
}

export default Hero