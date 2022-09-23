import React, { createContext, useState } from "react";

export const CategoryData = createContext();


const CategoryContext = ({ children }) => {
    const [categoryData, setCategoryData] = useState("All Blogs");

    console.log(categoryData);

    const updateCategory = newCategory => {
        setCategoryData(newCategory)
    }

  return (
    <CategoryData.Provider value={[categoryData, updateCategory]}>
        {children}
    </CategoryData.Provider>
  )
}

export default CategoryContext