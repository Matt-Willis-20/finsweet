import React, { useState } from 'react';
import Button from '../../components/button/Button';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import './footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    alert(`The email address ${email} has been subscribed to the Finsweet newsletter!`)
  }

  return (
    <footer>
      <div className='subscribe-container'>
        <h2>Subscribe to our news letter to get latest updates and news</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder='email address'
            className='body-text-01'
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          >
          </input>
          <Button
            type="submit"
            text="Subscribe"
          />
        </form>
      </div>
      <div className="footer-info-container">
        <div className='footer-info'>
          <p className='body-text-01'>Finstreet 118 2561 Fintown</p>
          <p className='body-text-01'>Hello@finsweet.com 020 7993 2905</p>
        </div>
        <div className="footer-icons">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsLinkedin />
        </div>
      </div>
    </footer>
  )
}

export default Footer