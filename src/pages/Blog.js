import React, { useEffect } from 'react';
import Join from '../containers/join/Join';
import Header from '../containers/Blog Page/Header/Header'
import Category from '../containers/category/Category';
import AllBlogs from '../containers/Blog Page/allBlogs/AllBlogs';

const Blog = () => {
  useEffect(() => {
    //scroll to top on page load
    window.scrollTo({top: 0, behaviour:'smooth'});
  }, []);

  return (
    <div>
      <Header />
      <AllBlogs />
      <Category />
      <Join />
    </div>
  )
}

export default Blog