import React from 'react';
import CategorySmall from '../../../components/categorySmall/CategorySmall';
import { uniqueCategories } from '../../../helpers/blogsContent';
import './sidebar.css';

const Sidebar = ({filterBlogs}) => {

  return (
    <div className='category-sidebar-container'>
        <h2>Categories</h2>
        <div className='category-container'>
            <CategorySmall category="All Posts" filterBlogs={filterBlogs} />
            {uniqueCategories.map((category, index) => (
                <CategorySmall key={index} category={category} filterBlogs={filterBlogs} />
            ))}
            
        </div>
    </div>
  )
}

export default Sidebar