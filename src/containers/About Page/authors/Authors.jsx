import React, { useState, useEffect } from 'react';
import Author from '../../../components/author/Author';
import './authors.css';

const Authors = () => {
    const [authors, setAuthors] = useState([]);

    useEffect (() => {
            fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => setAuthors(data.users));
    }, []);

    const listedAuthors = authors.slice(0, 8);

  return (
    <section className='section-padding authors-list'>
        <h2>List of Authors</h2>
        <div className='about-authors-container'>
            {listedAuthors.map((author) => (
                <Author key={author.id} image={author.image} name={author.firstName + " " + author.lastName} role={author.company.title}/>
            ))}
        </div>
    </section>
  )
}

export default Authors