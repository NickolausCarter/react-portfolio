import React from 'react';
import headshot from '../../assets/images/nick.jpg';
import { Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section>
      <div className='container mt-3' style={{backgroundColor: 'rgb(252, 163, 17)', padding: 15, borderRadius: 5}}>
        <h2 className='title' style={{textAlign: 'center', marginBottom: 30}}>Who is Nick Carter?</h2>
        <div className='bio row d-flex justify-content-between mb-5'>
          <Row>
            <Col md={6}>
              <img
                id='profile-img'
                className='img-fluid'
                src={headshot}
                alt='Nick Carter head shot'
                style={{minWidth: 200, maxHeight: 400, borderRadius: 5}}
              >

              </img>
            </Col>
            <Col md={6}
            style={{color: 'rgb(255, 255, 255)',backgroundColor: 'rgb(20, 33, 61)', borderRadius: 5}}>
              <p>I am a web developer and U.S. Army Veteran with over 20 years of experience in human intelligence collection and analysis.</p>
              <p>During my time in the military, I led teams ranging from 4 to 24 members that were often spread across various locations in the US, Europe, Africa, and Asia. I have a passion for working as a member of a team to dissect complex problems, develop creative solutions, and achieve unique results.</p>
              <p>I have had a strong interest in technology and computing since I was a child and have been building my own computers as a hobby for about 20 years. I'm excited to work with a motivated team in order to develop applications that can be used to enhance people's daily lives!</p>
              <p>I recently earned a certificate from the University of Texas in full stack web development that included HTML, CSS, JavaScript, and the MERN Stack. I recently enrolled at Western Governors University to continue my higher education and obtain a B.S. Cyber Security and Information Assurance.</p>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  )
};

export default About;