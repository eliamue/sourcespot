import React from "react";
import { PropTypes } from "prop-types";

const Resource = ({
  id,
  title,
  category,
  website,
  logo,
  located,
  about,
  tags,
}) => (
  <div className="resources">
    <div className="resource-header">
      <div className="category-tag">
        <img
          src={`${process.env.PUBLIC_URL}/${category}.png`}
          className="category-icon"
          alt={category}
        />
      </div>

      <ul className="location-disc">
        {located
          ? located.map((located, i) => (
              <li className="state-item" key={i}>
                {located}
              </li>
            ))
          : ""}
      </ul>
    </div>
    <h2 className="src-title">{title}</h2>
    <a href={website} alt={title}>
      <img src={logo} className="logo" alt={title} />
    </a>
    <div className="description">{about}</div>
    <h5 className="src-tags">{tags}</h5>
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
