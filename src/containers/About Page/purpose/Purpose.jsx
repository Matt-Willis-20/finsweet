import React from 'react';
import './purpose.css';

const Purpose = () => {
    return (
        <section className='section-padding about-page-purpose-container'>
            <div className='about-page-purpose-image'>
                <div className='about-page-colorstrip'>
                    <div className='yellow strip'></div>
                    <div className='purple strip'></div>
                </div>
            </div>
            <div className='about-page-purpose-content'>
                <div className='about-page-mission'>
                    <span>our mission</span>
                    <h3>Creating valuable content for creatives all around the world</h3>
                    <p className='body-text-01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                </div>
                <div className='about-page-vision'>
                    <span>our vision</span>
                    <h3>A platform that empowers individuals to improve</h3>
                    <p className='body-text-01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                </div>
            </div>
        </section>
    )
}

export default Purpose