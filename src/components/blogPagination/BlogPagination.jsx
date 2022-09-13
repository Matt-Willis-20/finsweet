import React, { useEffect } from 'react';
import './blogPagination.css'

const BlogPagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []

    for(let i=1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    useEffect (() => {
        const headerHeight = document.getElementById('blogpage-header').clientHeight;
        const navHeight = document.getElementById('main-nav').clientHeight;
        let totalHeight = headerHeight + navHeight
        window.scrollTo({top: totalHeight, behaviour:'smooth'});
    }, [pageNumbers])

  return (
    <nav id="blog-pagination-nav">
        <ul className='blogs-pagination'>
            {pageNumbers.map(number => (
                <li key={number} className="blog-page-number">
                    <button 
                        onClick={() => paginate(number)} href="!#" className="page-link">
                        {number}
                    </button>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default BlogPagination