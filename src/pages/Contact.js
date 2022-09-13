import React, { useEffect } from 'react';
import ContactDetails from '../containers/Contact Page/contactDetails/ContactDetails';
import ContactForm from '../components/contactForm/ContactForm';

const Contact = () => {
  useEffect(() => {
    //scroll to top on page load
    window.scrollTo({top: 0, behaviour:'smooth'});
  }, []);

  return (
    <section className='contact-us-container section-padding'>
      <ContactDetails />
      <ContactForm />
    </section>
  )
}

export default Contact