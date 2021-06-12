import React from 'react';
import '../../assets/css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <Row>
          <Col md={12} className="contacts">
            <a href="mailto:nickolaus.carter81@gmail.com" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faEnvelope} className='icon' size='2x' /></a>
            <a href="https://www.github.com/nickolauscarter" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} className='icon' size='2x' /></a>
            <a href="https://www.linkedin.com/in/nickolauscarter/" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} className='icon' size='2x' /></a>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <h3>&copy; 2021 Nick Carter</h3>
          </Col>
        </Row>
      </div>
    </footer>
  )
};

export default Footer;