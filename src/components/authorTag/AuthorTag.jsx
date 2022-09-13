import React from 'react';
import './authorTag.css';

const AuthorTag = ({name, date}) => {
  return (
    <p className='author-tag body-text-label'>By <span>{name}</span> | {date}</p>
  )
}

export default AuthorTag