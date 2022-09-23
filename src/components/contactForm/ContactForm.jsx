import React, { useState } from 'react';
import './contactForm.css';

const ContactForm = () => {
  const [inputs, setInputs] = useState({
  })

  // we use the same event handler for all inputs - giving cleaner code
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputs({
      usersName: "",
      email: "",
      message: ""
    })
    setTimeout(() => alert("Your message has been sent successfully! We'll be in touch soon :)"), 500);
  }

  return (
    <form onSubmit={handleSubmit} className='contact-form-container body-text-01'>
      <label>Full Name:</label>
      <input
        required
        type="text"
        name="usersName"
        value={inputs.usersName || ""}
        onChange={handleChange}
      />
      <label>Your Email Address:</label>
      <input
        required
        type="email"
        name="email"
        value={inputs.email || ""}
        onChange={handleChange}
      />
      <label>Topic:</label>
      <select
        required
        name="topic"
        value={inputs.topic || ""}
        onChange={handleChange}>
        <option value="Select">Select an option from the list...</option>
        <option value="Register">Registering as an Author</option>
        <option value="Subscription">Your Subscription</option>
        <option value="Create">Creating an Account</option>
        <option value="General">General Enquiry</option>
        <option value="Other">Other</option>
      </select>
      <label>Message:</label>
      <textarea
        required
        rows="8"
        name="message"
        value={inputs.message}
        onChange={handleChange}
        type="text"
      />
      <button type="submit">Send Message</button>
    </form>
  )
}

export default ContactForm