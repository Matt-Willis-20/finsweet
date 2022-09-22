import React, { useEffect } from 'react';
import Join from '../containers/join/Join';
import Header from '../containers/About Page/header/Header';
import Authors from '../containers/About Page/authors/Authors';
import Mission from '../containers/Home Page/mission/Mission';


const About = () => {

  useEffect(() => {
    //scroll to top on page load
    window.scrollTo({top: 0, behaviour:'smooth'});
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div></div>
        <Mission />
      </div>
      <Authors />
      <Join />
    </div>
  )
}

export default About