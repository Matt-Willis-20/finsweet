import React, { useState } from 'react';
import './allBlogs.css';
import { blogsContent } from '../../../helpers/blogsContent';
import Blogs from '../../../components/blogs/Blogs';
import BlogPagination from '../../../components/blogPagination/BlogPagination';


const AllBlogs = () => {
    const [blogsList] = useState(blogsContent);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    //get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogsList.slice(indexOfFirstPost, indexOfLastPost);

    //change page of blog articles 
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className='section-padding'>
        <h1 className='all-blogs-heading'>All posts</h1>
        <div className='blogs-container'>
            <Blogs blogsList={currentPosts} />
            <BlogPagination postsPerPage={postsPerPage} totalPosts={blogsList.length} paginate={paginate} />
        </div>
    </section>
  )
}

export default AllBlogs