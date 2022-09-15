import React, { useEffect } from 'react';
import Join from '../containers/join/Join';

const About = () => {

  useEffect(() => {
    //scroll to top on page load
    window.scrollTo({top: 0, behaviour:'smooth'});
  }, []);

  return (
    <div>
      <Join />
    </div>
  )
}

export default About