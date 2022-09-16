import React from 'react';
import './header.css';

export const Header = () => {
  return (
    <header id="category-page-header" className='section-padding'>
        <p className='display-text' id="category-page-title">Business</p>
        <p className='body-text-01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <p>blog - <span id="category-page-category">business</span></p>
    </header>
  )
}

export default Header