import React from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'bootstrap';

const Contact = () => {
  return (
    <section id='contact'>
<div className="">
    <h1 className='text-center shadow spa' id='he'>Contact Me</h1>
</div>

<div className="container">
    <div data-aos="flip-left" className="card19">
        <h1 className='m-4'  id='cor'> Get in Touch </h1>
<hr />
        <p className='m-4'>I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to contact me through any of the platforms below.</p>
  
<div className="icons">
       <a href="https://www.instagram.com/tayyabansari530?igsh=MmV1YnNqa3hrMXFk" target='_blank'><FontAwesomeIcon className='m-4' id='int' icon={ faInstagram } /></a> 
       <a href="https://github.com/Tayyabansari109" target='_blank'><FontAwesomeIcon className='m-4'id='gii' icon={ faGithub } /></a>
       <a href="https://www.linkedin.com/in/tayyab-ansari-9a2557390/" target='_blank'><FontAwesomeIcon className='m-4' id='inn' icon={ faLinkedin } /></a>
       <a href="https://wa.me/923281166513" target='_blank'><FontAwesomeIcon className='m-4' id='wha' icon={ faWhatsapp } /></a>
       <a href="https://www.facebook.com/share/17qPhrj9zy/" target="_blank"><FontAwesomeIcon className='m-4' id='fac' icon={ faFacebook } /></a>
       <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ta759777@gmail.com" target='_blank' ><FontAwesomeIcon className='m-4' id='eve' icon={ faEnvelope } /></a>
</div>
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=ta759777@gmail.com" target='_blank' > <button id='butt'> Contact Me</button></a>
    
    </div>
</div>

    </section>
  )
}

export default Contact