import React from 'react';
import Blog10 from '../../../assets/images/blog10.jpg';
import Button from '../../../components/button/Button';
import './header.css';

const Header = () => {
  return (
    <header className='section-padding' id="blogpage-header">
      <div className='blogs-header-content-container'>
        <div className='blogs-header-info'>
            <p>Featured Post</p>
            <h2>Step-by-step guide to choosing great font pairs</h2>
            <p className='body-text-label'>By <span className="author-name">James West</span> | May 23, 2022</p>
            <p className='body-text-01'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <Button text='Read More >' />
        </div>
        <div className='blogs-header-image'>
            <img src={Blog10} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header