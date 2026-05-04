import React from 'react'
import { useEffect, useState } from "react";
import './Skills.scss'
import { Button } from 'antd';
import AOS from "aos";
import "aos/dist/aos.css";


const Skills = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);



function ProgressBar({ percent }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev >= percent) {
          clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(id);
  }, [percent]);

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: width + "%" }}
      >
        {width}%
      </div>
    </div>
  );
}




  return (
    <section className='shadow' id='skills'>
      <hr/>
      <div>
        <h1 className=' text-center shadow spa'>Skills</h1>
      </div>

      <div id='cab1'>

        <div data-aos="fade-right"  className='card1 mb-4' id='sto'><h1>HTML 5</h1>
          <ProgressBar percent={90} />
        </div>

        <div data-aos="fade-left" className='card2'><h1>CSS 3</h1>
          <ProgressBar percent={80} />
        </div>

      </div>

      <div id='cab2'>

        <div data-aos="fade-right" className='card3 mb-4'><h1>Bootstrap</h1>
          <ProgressBar percent={70} />
        </div>

        <div data-aos="fade-left" className='card4'><h1>JavaScript</h1>
          <ProgressBar percent={75} />
        </div>

      </div>

      <div id ='cab3'>

        <div data-aos="fade-right" className='card5 mb-4'><h1 >React JS</h1>
          <ProgressBar percent={85} />
        </div>

        <div data-aos="fade-left" className='card6'><h1>Firebase</h1>
          <ProgressBar percent={60} />
        </div>

      </div>

      <div id='cab4'>
        
        <div data-aos="fade-right" className='card7 mb-4'><h1>Mern Stack</h1>
        <Button className='shadow' loading> Loading</Button>
        </div>
        
        <div data-aos="fade-left" className='card8'><h1>SEO</h1>
        <Button className='shadow' loading> Loading</Button>
        </div>
     </div>
     
    </section>
  )
}

export default Skills