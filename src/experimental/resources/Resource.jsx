import React from "react";
import { PropTypes } from "prop-types";

const Resource = ({ id, title, category, website, logo, located, about, tags }) => (
    <div className="resources">
      <div className="category-tag">
        <img
          src={`${process.env.PUBLIC_URL}/${category}.png`}
          className="category-icon"
          alt={category}
        />
      </div>
      <div className="location-disc">{located}</div>
      <h2 className="src-title">{title}</h2>
      <a href={website} alt={title}>
        <img src={logo} className="logo" alt={title} />
      </a>
      <div className="description">{about}</div>
      <div className="tags">{tags}</div>
    </div>
);

Resource.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  about: PropTypes.string,
  website: PropTypes.string,
  logo: PropTypes.string,
  located: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default Resource;
