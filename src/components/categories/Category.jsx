import React from 'react';
import { PropTypes } from 'prop-types';

const Category = ({ category, icon }) => (
    <div className="category" key={category}>
        <div className="category-item">
            <img
              src={`${process.env.PUBLIC_URL}/${icon}`}
              className="category-icon"
              alt={`${category}`}
            />
            {category}
          </div>
    </div>
);

Category.propTypes = {
    category: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Category;
