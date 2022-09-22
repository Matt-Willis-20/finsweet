import React from 'react';
import './blogs.css';

const Blogs = ({ blogsList }) => {
  return (
    <>
      <div className='blogs-list'>
        {blogsList.map((blog) => (
          <div className='large-blog-post-container' key={blog-id} category={blog.category}>
            <img src={require("../../assets/images/" + blog.src + ".jpg")} alt={blog.alt} />
            <div className='large-blog-post-content'>
              <span className='body-text-01'>{blog.category}</span>
              <h2>{blog.title}</h2>
              <p className='body-text-01'>{blog.intro}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Blogs