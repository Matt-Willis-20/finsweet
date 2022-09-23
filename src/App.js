import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, FloatToTop } from './components/index';
import Footer from './containers/footer/Footer';
import CategoryContext from './components/CategoryContext';

const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));


const App = () => {

  return (
    <CategoryContext>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/categoryPage" element={<CategoryPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <FloatToTop />
    </CategoryContext>
  )
}

export default App