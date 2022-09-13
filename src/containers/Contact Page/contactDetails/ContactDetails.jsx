import React from 'react';
import './contactDetails.css';

const ContactDetails = () => {
  return (
    <div className='contact-details-container'>
        <div className='contact-us-intro'>
            <span className='section-span'>contact us</span>
            <h1>Let’s Start a Conversation</h1>
            <p className='body-text-01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        </div>
        <div className='service-details-container'>
          <div className='working-hours'>
            <p className='body-text-02'>Working Hours</p>
            <h5>Monday to Friday</h5>
            <h5>9:00 AM to 8:00 PM</h5>
            <p className='body-text-02'>Our Support Team is available 24/7</p>
          </div>
          <div className='contact-number'>
            <p className='body-text-02'>Contact Us</p>
            <h5>020 7993 2905</h5>
            <p className='body-text-02'>hello@finsweet</p>
          </div>
        </div>
    </div>
  )
}

export default ContactDetails