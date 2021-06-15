import React from 'react';
import '../../assets/css/portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import portfolioData from '../../utils/portfolio';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='portfolio-header'>My recent work.</div>
      <div className='wrapper'>
        {
          portfolioData.portfolio && portfolioData.portfolio.map(item => {
            return (
              <div className='portfolio-item'>
                <p>{item.title}</p>
                <img src={item.image} />
                <div className='item-links'>
                  <a href={item.url} target='_blank' rel='noreferrer'>Link to application</a>
                  <a href={item.github} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} className='icon' />Repository</a>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default Portfolio;