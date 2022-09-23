import React, { useEffect } from 'react';
import { Join, Category, BlogPageHeader, AllBlogs } from '../containers/index';

const Blog = () => {
  useEffect(() => {
    //scroll to top on page load
    window.scrollTo({top: 0, behaviour:'smooth'});
  }, []);

  return (
    <div>
      <BlogPageHeader />
      <AllBlogs />
      <Category />
      <Join />
    </div>
  )
}

export default Blog