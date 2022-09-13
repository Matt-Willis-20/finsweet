import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './app.css';

import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';


import FloatToTop from './components/floatToTop/FloatToTop';
import Navbar from './components/navbar/Navbar';
import Footer from './containers/footer/Footer';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    <FloatToTop />
    </>
  )
}

export default App