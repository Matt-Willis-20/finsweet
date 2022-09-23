import React from 'react';
import './featured.css';
import { ImQuill, ImSpinner4, ImShield, ImDropbox, ImXing2 } from 'react-icons/im';

const Featured = () => {
  return (
    <section className='section-padding'>
      <div className='home-featured-container'>
        <div className='home-featured-intro'>
          <p className='body-text-02'>We are</p>
          <h4>Featured in</h4>
        </div>
        <div className='home-featured-companies'>
          <div className='home-featured-companies-name'>
            <div className='home-featured-companies-icon'>{<ImQuill />}</div> 
            <p>SouthFace</p>
          </div>
          <div className='home-featured-companies-name'>
            <div className='home-featured-companies-icon'>{<ImSpinner4 />}</div> 
            <p>Rimz</p>
          </div>
          <div className='home-featured-companies-name'>
            <div className='home-featured-companies-icon'>{<ImShield />}</div> 
            <p>BraveDefence</p>
          </div>
          <div className='home-featured-companies-name'>
            <div className='home-featured-companies-icon'>{<ImDropbox />}</div> 
            <p>DropBox</p>
          </div>
          <div className='home-featured-companies-name'>
            <div className='home-featured-companies-icon'>{<ImXing2 />}</div> 
            <p>ImagineX</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured