import React, { useEffect } from 'react';
import Header from '../containers/Home Page/header/Header';
import Blog from '../containers/Home Page/blogs/Blogs';
import About from '../containers/Home Page/about/About';
import Category from '../containers/category/Category';
import Why from '../containers/Home Page/why/Why';
import Authors from '../containers/Home Page/authors/Authors';
import Featured from '../containers/Home Page/featured/Featured';
import Testimonials from '../containers/Home Page/testimonials/Testimonials';
import Join from '../containers/join/Join';


const Home = () => {
  
  useEffect(() => {
    //scroll to top on page load
    window.scrollTo({top: 0, behaviour:'smooth'});
  }, []);

  return (
    <>
      <Header />
      <Blog />
      <About />
      <Category />
      <Why />
      <Authors />
      <Featured />
      <Testimonials />
      <Join />
    </>
  )
}

export default Home