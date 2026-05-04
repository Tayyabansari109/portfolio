import React from 'react'
import './About.scss'
import { Button } from 'bootstrap'

const About = () => {
  return (
    <section id='about'>
        <div className="cover">
            <img id='respo' src="../src/assets/my-photo.png" alt="Tayyab" />
        </div>
      <div>
        <h1 className='text-center shadow' id='he'>About Me</h1>
        <p id='space'>Hello,<br/>I am<code id='lit'> Muhammad Tayyab.</code> I am a student of Becholer in Computer Science & I havea strong interest in web development.
         I started learning frontend development in 2024 and have been building my skills in HTML, CSS, Bootstrap, JavaScript, Firebase and React.<br />
         I am also learning Mern Stack development and Search Engine Optimization to expand my knowledge and capabilities in web development.
         I enjoy creating responsive and modern websites, and I am continuously improving my abilities to deliver clean and user-friendly
         interfaces.
       </p>
       <button id='but'>Contact ME</button>
      </div>

    </section>
  )
}

export default About