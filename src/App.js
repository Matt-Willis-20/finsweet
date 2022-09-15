import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';

import FloatToTop from './components/floatToTop/FloatToTop';
import Navbar from './components/navbar/Navbar';
import Footer from './containers/footer/Footer';
import BlogPage from './pages/BlogPage';
import CategoryPage from './pages/CategoryPage';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/categoryPage" element={<CategoryPage />} />
    </Routes>
    <Footer />
    <FloatToTop />
    </>
  )
}

export default App