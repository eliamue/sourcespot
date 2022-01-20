import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Resource = ({ id, title, category, link, logo, about }) => (
    <div>
        <section className="resource">
            <Link to={`/${id}`}>
            <h2 className="srcName">{title}</h2>
            </Link>
            <h3 className="category">Category: {category}</h3>
            <h4 className="location">{link}, {logo}</h4>
            <p className="description">{about}</p>
        </section>
  </div>
);

Resource.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  link: PropTypes.string,
  logo: PropTypes.string,
  about: PropTypes.string,
};

export default Resource;
