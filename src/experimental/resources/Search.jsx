import React from "react";
import PropTypes from "prop-types";

const Search = ({ onSearch, searchTerm }) => (
  <label>
    Search for a resource:
    <input
      type="text"
      name="searchTerm"
      value={searchTerm}
      onChange={onSearch}
    />
  </label>
);

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
