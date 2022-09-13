import React from 'react';
import { Link } from 'react-router-dom';
import AuthorTag from '../../../components/authorTag/AuthorTag';
import BlogSmall from '../../../components/blogSmall/BlogSmall';
import Button from '../../../components/button/Button';
import Blog01 from '../../../assets/images/blog01.jpg';

import './blogs.css';

const Blogs = () => {
  return (
    <section className="home-blog section-padding">
      <div className='home-blog-container'>
        <div className='home-blog-featured-container'>
          <h2>Featured Post</h2>
          <div className='home-blog-featured'>
            <img src={Blog01} alt="lighthouse scene" />
            {/* Photo by Vidar Nordli-Mathisen on Unsplash*/}
            <AuthorTag name="John Smith" date="23 May, 2022" />
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
            <p className='home-blog-featured-text body-text-01'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <Button text="Read More >" />
          </div>
        </div>
        <div className='home-blog-all-container'>
          <div className='home-blog-all-title'>
            <h2>All Posts</h2>
            <Link to='/blog' className='nav-link body-text-01'>View All</Link>
          </div>
          <div className='home-blog-all-posts'>
            <BlogSmall name="Matt Willis" date="13 Jun, 2022" title="8 Figma design systems that you can download for free today."/>
            <BlogSmall name="Laura Rockett" date="30 Oct, 2021" title="8 Figma design systems that you can download for free today."/>
            <BlogSmall name="Jennifer Gillon" date="15 Mar, 2022" title="8 Figma design systems that you can download for free today."/>
            <BlogSmall name="Hamilton Hamil" date="03 Aug, 2022" title="8 Figma design systems that you can download for free today."/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs