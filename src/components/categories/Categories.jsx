import React from "react";
import PropTypes from 'prop-types';
import categoriesData from "./categoriesdata";
import Category from "./Category.jsx";

console.log(categoriesData)

const Categories = () => {
  // const categoryArr = categoriesData.map((category) => {
  //   return category;
  // });
// console.log({ categoryArr })
  return (
    <div>
      <section className="categories-container">
        <ul>
          {categoriesData.map((category, i) => (
          <li key={i}>
            <Category 
              category={category.category} 
              icon={category.icon} 
            />
          </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Categories.propTypes = {
  categoryArr: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      icon: PropTypes.string
    })
  ),
};

export default Categories;
