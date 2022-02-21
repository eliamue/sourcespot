import React, { Component } from 'react';
import SearchInput, { createFilter } from "react-search-input";
import Resource from './resources/Resource';
import "../styles/List.css";
import { fetchAllResources } from '../services/apiService.js';

const KEYS_TO_FILTERS = ["title", "about", "category", "tags", "located"];

export default class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      resources: []
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  async componentDidMount() {
    const resources = await fetchAllResources();
    this.setState({ resources, loading: false });
  }

  render() {
    const { resources } = this.state;
    const filteredData = resources.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );
    filteredData.sort(function (a, b) {
      return a.category.localeCompare(b.category);
    });
    return (
      <div className="container">
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        <ul className="results">
        {filteredData.map((resource) => {
          return (
            <li className="searchresult" key={resource.id}>
              <Resource
                title={resource.title}
                category={resource.category}
                about={resource.about}
                located={resource.located}
                website={resource.website}
                logo={resource.logo}
                tags={resource.tags}
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
 