import React, { useEffect, useState } from 'react';
import './floatToTop.css';
import { BsArrowUp } from 'react-icons/bs';

const FloatToTop = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      (window.pageYOffset > 400) ? setShowButton(true) : setShowButton(false)
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} id="float-to-top" className='fade-in-fwd'>
          <BsArrowUp />
          <p>TOP</p>
        </button>
      )}
    </>
  )
}

export default FloatToTop