import React, { useEffect } from 'react';
import { Join, Category, Mission, Why, Testimonials, Featured, Blog, Header, HomePageAuthors } from '../containers/index';


const Home = () => {

  useEffect(() => {
    //scroll to top on page load
    window.scrollTo({ top: 0, behaviour: 'smooth' });
  }, []);

  return (
    <>
      <Header />
      <Blog />
      <Mission />
      <Category />
      <Why />
      <HomePageAuthors />
      <Featured />
      <Testimonials />
      <Join />
    </>
  )
}

export default Home