import React from 'react'
import './author.css';

import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const Author = ({image, name, role}) => {
  return (
    <div className='author-container'>
        <div className='author-image-container'>
            <img src={image} alt="" />
        </div>
        <h3>{name}</h3>
        <div className='author-role-container'>
          <p className='body-text-02'>{role}</p>
        </div>
        <div className='author-socials-container'>
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsLinkedin />
        </div>
    </div>
  )
}

export default Author