import React from 'react';
import './categorySmall.css';

const CategorySmall = ({icon, category, text, filterBlogs}) => {

  return (
    <button className='small-category-container' category={category} onClick={() => filterBlogs(category)}>
        <div className='small-category-icon-container' icon={icon}>
            {icon}
        </div>
        <h3>{category}</h3>
        <p className='body-text-01'>{text}</p>
    </button>
  )
}

export default CategorySmall