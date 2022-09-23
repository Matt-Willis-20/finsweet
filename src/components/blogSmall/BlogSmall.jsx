import React from 'react';
import { Link } from 'react-router-dom';
import AuthorTag from '../authorTag/AuthorTag';
import Blog02 from '../../assets/images/blog02.jpg';
import './blogSmall.css';


const BlogSmall = ({ name, date, title }) => {
  return (
    <Link to='/blogpage'>
      <div className='small-blog-container'>
        <div className='small-blog-image'>
          <img src={Blog02} alt="" />
        </div>
        <div className='small-blog-content'>
          <AuthorTag name={name} date={date} />
          <h4>{title}</h4>
        </div>
      </div>
    </Link>
  )
}

export default BlogSmall