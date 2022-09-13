import React from 'react';
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
        <CategorySmall icon={<FaBuilding />} category="Business" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
        <CategorySmall icon={<FaRocket />} category="Startup" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
        <CategorySmall icon={<FaChartLine />} category="Economy" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
        <CategorySmall icon={<GrTechnology />} category="Technology" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
      </div>
    </section>
  )
}

export default Category