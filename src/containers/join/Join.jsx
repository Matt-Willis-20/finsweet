import React from 'react';
import './join.css';
import Button from '../../components/button/Button';

const Join = () => {
  return (
    <section className='section-padding'>
      <div className='join-container'>
        <h2>Join our team to be a part of our story</h2>
        <p className='body-text-01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <Button text="Join Now" />
      </div>
      
    </section>
  )
}

export default Join