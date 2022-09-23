import React, { useEffect } from 'react'
import Authors from '../containers/About Page/authors/Authors';
import { AboutHeader, Team, Purpose, Join } from '../containers/index';


const About = () => {

  useEffect(() => {
    //scroll to top on page load
    window.scrollTo({top: 0, behaviour:'smooth'});
  }, []);

  return (
    <div>
      <AboutHeader />
      <Purpose />
      <Team />
      <Authors />
      <Join />
    </div>
  )
}

export default About