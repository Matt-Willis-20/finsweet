import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './category.css';
import CategorySmall from '../../components/categorySmall/CategorySmall';
import { FaRocket, FaBuilding, FaChartLine } from 'react-icons/fa';
import { GrTechnology } from 'react-icons/gr';

import { CategoryData } from '../../components/CategoryContext';

const Category = () => {
  const [categoryData, setCategoryData] = useContext(CategoryData);

  return (
    <section className='section-padding'>
      <h2 className='home-category-title'>Choose A Category</h2>
      <div className='home-small-category-container'>
        <Link to='/categoryPage' onClick={() => setCategoryData("business")}>
          <CategorySmall icon={<FaBuilding />} category="business" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
        </Link>
        <Link to='/categoryPage' onClick={() => setCategoryData("startup")}>
          <CategorySmall icon={<FaRocket />} category="startup" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
        </Link>
        <Link to='/categoryPage' onClick={() => setCategoryData("economy")}>
          <CategorySmall icon={<FaChartLine />} category="economy" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
        </Link>
        <Link to='/categoryPage' onClick={() => setCategoryData("technology")}>
          <CategorySmall icon={<GrTechnology />} category="technology" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
        </Link>    
      </div>
    </section>
  )
}

export default Category