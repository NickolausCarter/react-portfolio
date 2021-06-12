import React from 'react'
import {Row, Col} from 'react-bootstrap'
import resume from '../../assets/NickolausCarterResume.pdf'



const Resume = () => {
    return(
        <section className='mb-5'>
        <div  className="container mt-3 mb-5">
          <h2 className='title'> Resume</h2>
          <a className='resume' href={resume} target='_blank' rel='noreferrer'>Download Resume</a>

          <Row>
            <Col md={6}>
              <h4 className='title'>Front-End Proficiencies</h4>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Apollo</li>
                <li>Service Workers</li>
              </ul>
            </Col>
            <Col lg={6}>
            <h4 className='title'>Back-End Proficiencies</h4>
            <ul>
              <li>REST APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>SQL</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>MongoDB</li>
              <li>GraphQL</li>
              <li>JSON Web Tokens</li>
            </ul>
        
            </Col>
          </Row>
          </div> 
      </section>
    )
};

export default Resume;