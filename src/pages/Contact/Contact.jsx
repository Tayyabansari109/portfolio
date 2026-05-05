import React from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id='contact'>
<div className="">
    <h1 className='text-center shadow spa' id='he'>Contact Me</h1>
</div>

<div className="container">
    <div className="card19">
        <h1 className='m-4'  id='cor'> Get in Touch </h1>
<hr />
        <p className='m-4'>I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to contact me through any of the platforms below.</p>
<FontAwesomeIcon icon={ faInstagram } />
<FontAwesomeIcon icon={ faGithub } />
    </div>
</div>

    </section>
  )
}

export default Contact