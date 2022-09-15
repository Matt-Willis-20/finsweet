import React, { useEffect } from 'react';

const BlogPage = () => {
    useEffect(() => {
        //scroll to top on page load
        window.scrollTo({top: 0, behaviour:'smooth'});
      }, []);

  return (
    <div>BlogPage</div>
  )
}

export default BlogPage