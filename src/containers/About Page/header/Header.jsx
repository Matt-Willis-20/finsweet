import React from 'react';
import './header.css';

const Header = () => {
  return (
    <section className='section-padding' id="about-page-header">
      <div className='about-header-container'>
        <div className='about-header-title'>
          <p className='body-text-01'>About us</p>
          <h1>We are a team of content writers who share their learnings</h1>
        </div>
        <div className="about-header-text">
          <p className="body-text-01">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </section>
  )
}

export default Header