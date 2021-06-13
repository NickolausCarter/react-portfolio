import React from 'react';
import headshot from '../../assets/images/nick.jpg';
import '../../assets/css/about.css';

const About = () => {
  return (
      <div className='about-me'>
        <h1>Who is Nick Carter?</h1>
        <div className='container'>
          <img className='profile-img' src={headshot} alt='Nick Carter head shot' />
          <div className='content'>
            <p>I am a web developer and U.S. Army Veteran with over 20 years of experience in human intelligence collection and analysis.</p>
            <p>During my time in the military, I led teams ranging from 4 to 24 members that were often spread across various locations in the US, Europe, Africa, and Asia. I have a passion for working as a member of a team to dissect complex problems, develop creative solutions, and achieve unique results.</p>
            <p>I have had a strong interest in technology and computing since I was a child and have been building my own computers as a hobby for about 20 years. I'm excited to work with a motivated team in order to develop applications that can be used to enhance people's daily lives!</p>
            <p>I recently earned a certificate from the University of Texas in full stack web development that included HTML, CSS, JavaScript, and the MERN Stack. I recently enrolled at Western Governors University to continue my higher education and obtain a B.S. Cyber Security and Information Assurance.</p>
          </div>
        </div>
      </div>
  )
};

export default About;