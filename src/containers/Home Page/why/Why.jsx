import React from 'react';
import './why.css';
import Friends from '../../../assets/images/friends.jpg';
import Button from '../../../components/button/Button';

const Why = () => {
  return (
    <section className='section-padding'>
      <div className='home-why-container'>
        <div className='home-why-image'>
          <img src={Friends} className="home-why-image-clip" alt="" />
          <div className='home-why-content'>
            <span>Why we started</span>
            <h1>It started out as a simple idea and evolved into our passion</h1>
            <p className='body-text-01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <Button text="Discover our story >" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why


/* Photo by Duy Pham via Unsplash */