import React from 'react';
import './authors.css';
import Author from '../../../components/author/Author';
import Author1 from '../../../assets/images/author1.jpg';
import Author2 from '../../../assets/images/author2.jpg';
import Author3 from '../../../assets/images/author3.jpg';
import Author4 from '../../../assets/images/author4.jpg';

const Authors = ({image, name, role}) => {
  return (
    <section className='section-padding' id="home-authors">
      <h2>List of Authors</h2>
      <div className='home-authors-container'>
        <Author image={Author1} name="Sara Sash" role="Content Writer @ UX Masters" />
        <Author image={Author2} name="Trudy Alsop" role="Media Manager @ Bloggers 'R Us" />
        <Author image={Author3} name="Toby Carvery" role="Content Writer @ Freedom Prints" />
        <Author image={Author4} name="Kitty Purr" role="Milk Drinker @ Catz Drinks" />
      </div>
    </section>
  )
}

export default Authors

// Author1 - Photo by Matthew Hamilton on Unsplash
// Author4 - Photo by Kari Shea on Unsplash
// Author3 - Photo by Griffin Wooldridge on Unsplash
// Author2 - Photo by Hannah Busing on Unsplash