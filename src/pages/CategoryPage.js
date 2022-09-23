import React, { useState, useEffect } from 'react';
import Blogs from '../components/blogs/Blogs';
import { CategoryHeader, Sidebar } from '../containers/index';
import { blogsContent } from '../helpers/blogsContent';
import './categoryPage.css'

const CategoryPage = () => {

  useEffect(() => {
    //scroll to top on page load
    window.scrollTo({ top: 0, behaviour: 'smooth' });
  }, []);

  const [blogsList] = useState(blogsContent);
  const [categoryBlogList, setCategoryBlogList] = useState(blogsContent);

  const pageTitle = document.getElementById('category-page-title');
  const pageCategory = document.getElementById('category-page-category');

  const filterBlogs = (currentCategory) => {
    if (currentCategory === "All Posts") {
      setCategoryBlogList(blogsContent);
      pageTitle.innerText = (currentCategory);
      pageCategory.innerText = (currentCategory);
    } else {
      const newBlogsList = blogsList.filter((newCategory) => {
        return newCategory.category === currentCategory;
      });
      setCategoryBlogList(newBlogsList);
      pageTitle.innerText = (currentCategory);
      pageCategory.innerText = (currentCategory);
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