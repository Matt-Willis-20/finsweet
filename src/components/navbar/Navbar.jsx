import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';



const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    if (toggleMenu) {
      setToggleMenu(false);
      } else {
      setToggleMenu(true);
      }
    }

  return (
    <nav id="main-nav">
      <Link to='/' className="logo">~Finsweet</Link>
      <div className="nav-links">
        <Link to='/' className='nav-link body-text-01' onClick={handleClick}>Home</Link>
        <Link to='/blog' className='nav-link body-text-01' onClick={handleClick}>Blog</Link>
        <Link to='/about' className='nav-link body-text-01' onClick={handleClick}>About Us</Link>
        <Link to='/contact' className='nav-link body-text-01' onClick={handleClick} >Contact Us </Link>
        <button type="button">Subscribe</button>
      </div>
      <div className='mobile-nav-container'>
      {toggleMenu
          ? <RiCloseLine color="#fff" size={25} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={25} onClick={() => setToggleMenu(true)} />
        }
      {toggleMenu && (
        <div className='mobile-nav-links slide-in-right'>
          <Link to='/' className='nav-link body-text-01' onClick={handleClick}>Home</Link>
          <Link to='/blog' className='nav-link body-text-01' onClick={handleClick}>Blog</Link>
          <Link to='/about' className='nav-link body-text-01' onClick={handleClick}>About Us</Link>
          <Link to='/contact' className='nav-link body-text-01' onClick={handleClick} >Contact Us </Link>
          <button type="button">Subscribe</button>
        </div>
      )}
      </div>
    </nav>
  )
}

export default Navbar