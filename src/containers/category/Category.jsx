import React from 'react';
import { Link } from 'react-router-dom';
import './category.css';
import CategorySmall from '../../components/categorySmall/CategorySmall';
import { FaRocket } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { GrTechnology } from 'react-icons/gr';

const Category = () => {
  return (
    <section className='section-padding'>
      <h2 className='home-category-title'>Choose A Category</h2>
      <div className='home-small-category-container'>
        <Link to='/categoryPage'>
          <CategorySmall icon={<FaBuilding />} category="business" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
        </Link>
        <Link to='/categoryPage'>
          <CategorySmall icon={<FaRocket />} category="startup" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
        </Link>
        <Link to='/categoryPage'>
          <CategorySmall icon={<FaChartLine />} category="economy" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
        </Link>
        <Link to='/categoryPage'>
          <CategorySmall icon={<GrTechnology />} category="technology" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
        </Link>    
      </div>
    </section>
  )
}

export default Category