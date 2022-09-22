import React from 'react';
import { Link } from 'react-router-dom';
import './mission.css';

const Mission = () => {
  return (
    <section className='section-padding'>
      <div className='home-about-colorstrip'>
        <div className='white strip'></div>
        <div className='yellow strip'></div>
        <div className='purple strip'></div>
      </div>
      <div className='home-about-container'>
        <div className='home-about-us'>
          <span>about us</span>
          <h2>We are a community of content writers who share their learnings</h2>
          <p className='body-text-01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link to='/about' className='nav-link'>Read More +</Link>
        </div>
        <div className='home-about-mission'>
          <span>our mission</span>
          <h3>Creating valuable content for creatives all around the world</h3>
          <p className='body-text-01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </section>
  )
}

export default Mission