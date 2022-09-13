import React from 'react';
import './categorySmall.css';

const CategorySmall = ({icon, category, text}) => {
  return (
    <div className='small-category-container'>
        <div className='small-category-icon-container'>
            {icon}
        </div>
        <h3>{category}</h3>
        <p className='body-text-01'>{text}</p>
    </div>
  )
}

export default CategorySmall