import React from 'react';
import './testimonials.css';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { HiArrowNarrowRight } from 'react-icons/hi';

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    name: "Matt Willis",
    location: "Luton, UK"
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    name: "Laura Rockett",
    location: "Bedford, UK"
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    name: "Jennifer Gillion",
    location: "Stevenage, UK"
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    name: "Hamilton Hamil",
    location: "Hamitat, UK"
  },
];

const Testimonials = () => {

  let testimonialsList = testimonials.map((testimonial, index) => {
    return (
      <li className='home-testimonial-slide' key={index}>
        <h4 className='home-testimonial-text'>{testimonial.text}</h4>
        <h4>{testimonial.name}</h4>
        <p className='home-testimonial-location body-text-01'>{testimonial.location}</p>
      </li>
    )
  })


    const slidesContainer = document.querySelector(".home-testimonials-carousel");
    const slide = document.querySelector(".home-testimonial-slide");

    function nextSlide() {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
    }
  
    function prevSlide() {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft -= slideWidth;
    }
 

  return (
    <section className='section-padding' id="home-testimonials">
      <div className='home-testimonials-container'>
        <div className='home-testimonials-intro'>
          <span>Testimonials</span>
          <h2>What people say about our blog</h2>
          <p className='body-text-01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className='home-testimonials-carousel-wrapper'>
          <ul className='home-testimonials-carousel'>
            {testimonialsList}
          </ul>
          <div className='carousel-arrows'>
            <button className="arrow-container" id="slide-arrow-prev" onClick={prevSlide}>
              <HiArrowNarrowLeft />
            </button>
            <button className="arrow-container" id="slide-arrow-next" onClick={nextSlide}>
              <HiArrowNarrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials