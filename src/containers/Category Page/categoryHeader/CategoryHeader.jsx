import React, {useContext} from 'react';
import './categoryHeader.css';
import { CategoryData } from '../../../components/CategoryContext';


export const CategoryHeader = () => {
  const [categoryData] = useContext(CategoryData);

  return (
    <header id="category-page-header" className='section-padding'>
        <p className='display-text' id="category-page-title">{categoryData}</p>
        <p className='body-text-01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <p>blog - <span id="category-page-category">{categoryData}</span></p>
    </header>
  )
}

export default CategoryHeader