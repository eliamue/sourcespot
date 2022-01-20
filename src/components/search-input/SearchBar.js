import React, { Component } from 'react';
import SearchInput, { createFilter } from "react-search-input";
import data from '../dropdown/data.js';
import ResourceItem from '../dropdown/ResourceItem.js';
import Nav from '../Nav.jsx';
import "../dropdown/List.css";

const KEYS_TO_FILTERS = ["title", "about", "category"];

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  render() {
    const filteredData = data.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );

    return (
      <div className="container">
        <Nav />
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        <ul className="results">
        {filteredData.map((resource) => {
          return (
            <li className="searchresult" key={resource.id}>
              <ResourceItem
                link={resource.link}
                logo={resource.logo}
                title={resource.title}
                about={resource.about}
                category={resource.category}
                id={resource.id}
              />
            </li>
          );
        })}
        </ul>
      </div>
    );
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }
}
 