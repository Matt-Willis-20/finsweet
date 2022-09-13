import React from 'react';
import AuthorTag from '../authorTag/AuthorTag';
import './blogSmall.css';

const BlogSmall = ({name, date, title}) => {
  return (
    <div className='small-blog-container'>
        <AuthorTag name={name} date={date} />
        <h4>{title}</h4>
    </div>
  )
}

export default BlogSmall