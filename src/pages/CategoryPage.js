import React, { useState, useEffect, useContext } from 'react';
import Blogs from '../components/blogs/Blogs';
import { CategoryHeader, Sidebar } from '../containers/index';
import { blogsContent } from '../helpers/blogsContent';

import { CategoryData } from '../components/CategoryContext';

import './categoryPage.css'

const CategoryPage = () => {
  const [categoryData, setCategoryData] = useContext(CategoryData);
  const [blogsList] = useState(blogsContent);
  const [categoryBlogList, setCategoryBlogList] = useState(blogsContent.filter(blog => blog.category === categoryData));

  useEffect(() => {
    //scroll to top on page load
    window.scrollTo({ top: 0, behaviour: 'smooth' });
  }, []);

  const filterBlogs = (currentCategory) => {
    setCategoryData(currentCategory);
    if (currentCategory === "All Posts") {
      setCategoryBlogList(blogsContent);
    } else {
      const newBlogsList = blogsList.filter((newCategory) => {
        return newCategory.category === currentCategory;
      });
      setCategoryBlogList(newBlogsList);
    }
  };

  return (
    <>
      <CategoryHeader />
      <div className='category-page-container section-padding'>
        <Blogs blogsList={categoryBlogList} />
        <Sidebar filterBlogs={filterBlogs} />
      </div>
    </>
  )
}

export default CategoryPage