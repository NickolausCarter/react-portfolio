import React from 'react';
import resume from '../../assets/NickolausCarterResume.pdf';
import '../../assets/css/resume.css';



const Resume = () => {
  return(
    <div className='resume-section'>
      <h2 className='title'> Resume</h2>
      <a className='resume' href={resume} target='_blank' rel='noreferrer'>Download Resume</a>

      <div className='proficiencies'>

        <h4 className='title'>Front-End Proficiencies</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>React Native</li>
            <li>Handlebars</li>
            <li>Responisve Designs</li>
          </ul>
        <h4 className='title'>Back-End Proficiencies</h4>
        <ul>
          <li>Custom API's</li>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>SQL</li>
          <li>NoSQL</li>
          <li>MySQL</li>
          <li>Sequelite</li>
          <li>NodeJS</li>
          <li>MongoDB</li>
          <li>REST</li>
        </ul> 
      </div>
    </div>
  )
};

export default Resume;