import React from 'react'
import "./Resume.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const Resume = () => {
  return (
    <div style={{ height: "100vh", overflowY: "auto" }} className='container'>
        <h1 className='shadow mt-4'>Resume :</h1>

        <h1 className='text-center fw-bold  clo'>MUHAMMAD TAYYAB</h1>
        <p className='text-center'><span className='fw-bold'>Location :</span> Samnabad Faisalabad Pakistan - <span className='fw-bold'>Phone No. :</span> +92 3281166513
            <br/><span className='fw-bold'>Email :</span> ta759777@gmail.com
        </p>
        <hr className='fw-bolder clo'/>

        <h2 className=' fw-bold clo'>About Me</h2>
        <p style={{ textAlign: "justify" }}>Hello,<br/>
           I am Muhammad Tayyab. I am a student of Becholer in Computer Science & I have a strong interest
           in web development. I started learning frontend development in 2024 and have been building my
           skills in HTML, CSS, Bootstrap, JavaScript, Firebase and React.<br/>
           I am also learning Mern Stack development and Search Engine Optimization to expand my
           knowledge and capabilities in web development. I enjoy creating responsive and modern websites,
           and I am continuously improving my abilities to deliver clean and user-friendly interfaces.
        </p>
        <hr className='fw-bolder clo'/>

        <h2 className=' fw-bold clo'>Skills</h2>
        <p className=' fw-bold'>
          &#8226; HTML <br/>
          &#8226; CSS <br/>
          &#8226; Bootstrap <br/>
          &#8226; Ant design <br/>
          &#8226; Saac <br/>
          &#8226; javaScript (ES6+) <br/>
          &#8226; React 19 <br/>
          &#8226; Firebase Authentication <br/>
          &#8226; Git / Github <br/>
          &#8226; Responsive Designs <br/>
        </p>
        <hr className='fw-bolder clo'/>

        <h2 className=' fw-bold clo'>Experience</h2>
        <p style={{ textAlign: "justify" }}>
          I am a Frontend Developer with <span className=' fw-bold'>6 months of experience</span> in building responsive and
          modern web interfaces using HTML, CSS, Bootstrap, Sass, Ant Design, JavaScript, and
          React. I started learning development in 2024 and have been actively working on personal
          and freelance projects since then. I am a self-employed developer focused on improving
          my skills and building real-world projects.
          </p>

        <hr className='fw-bolder clo'/>

        <h2 className=' fw-bold clo'>Education</h2>

        <p className='fw-bold'>Bachelor of Science in Computer Science <span style={{ display: "block", textAlign: "right" }}>Nov 2024 - Nov 2028</span></p>
        <p style={{ marginLeft: "20px" }}>&#8226; Government College University Faisalabad</p>
        
        <hr className='fw-bolder clo'/>

        <h2 className=' fw-bold clo'>Contact</h2>
     <div className="icons">
       <a href="https://wa.me/923281166513" target='_blank'><FontAwesomeIcon className='m-4' id='wha' icon={ faWhatsapp } /></a>
       <a href="https://www.linkedin.com/in/tayyab-ansari-9a2557390/" target='_blank'><FontAwesomeIcon className='m-4' id='inn' icon={ faLinkedin } /></a>
       <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ta759777@gmail.com" target='_blank' ><FontAwesomeIcon className='m-4' id='eve' icon={ faEnvelope } /></a>
     </div>

        <hr className='fw-bolder clo'/> 
        
        <Link to="/">
        <button id="pro"> Back To Portfolio </button>
        </Link>
    </div>
  )
}

export default Resume