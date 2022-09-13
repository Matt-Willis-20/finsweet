import React from 'react';
import Button from '../../../components/button/Button';

import './header.css';

const Header = () => {
  return (
    <header className='section-padding' id="homepage-header">
      <div className='header-content'>
        <p>Posted on <span>startup</span></p>
        <p className="display-text" id="homepage-header-title"> Step-by-step guide to choosing great font pairs</p>
        <p className='body-text-01'>By <span className="author-name">James West</span> | May 23, 2022</p>
        <p className='body-text-01'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <Button text='Read More >' />
      </div>
    </header>
  )
}

export default Header