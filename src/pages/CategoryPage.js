import React, { useState } from 'react';
import Header from '../containers/Category Page/header/Header';
import Blogs from '../components/blogs/Blogs';
import Sidebar from '../containers/Category Page/sidebar/Sidebar';
import { blogsContent } from '../helpers/blogsContent';

import './categoryPage.css'

const CategoryPage = () => {
    const [blogsList] = useState(blogsContent);

  return (
    <>
    <Header />
      <div className='category-page-container section-padding'>
          <Blogs blogsList={blogsList} />
          <Sidebar  />
      </div>
    </>
  )
}

export default CategoryPage