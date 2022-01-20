import React, { Component } from 'react';
import ResourceItem from '../../components/ResourceItem.js';
import data from '../../components/data.js';
import Dropdown from './Dropdown.js';
import Nav from 'Nav.jsx';
import 'List.css';

export default class ImageList extends Component {

    state = {
        filteredCategories: ''
    }

    handleCategoryChange = (event) => {
        this.setState({ filteredCategories: event.target.value })
        this.setValue(event.target.value);
    }
    
    handleClear = (event) => {
      event.preventDefault();
      this.setState({ filteredCategories: '' })
    }

    render() {

        let resources = data;

        if (this.state.filteredCategories) {
            resources = data.filter(resources => resources.category === this.state.filteredCategories)
        }

        const categoryOptions = Array.from(new Set(resources.map(resources => resources.category)));

    return (
      <div className="main-container">
        <Nav />
        <div className="resource-container">
          <div className="dropdown">
            <label>Filter by Category</label>
            <Dropdown
              options={categoryOptions}
              value={this.handleCategoryChange}
              handleChange={this.handleCategoryChange}
              onClick={this.handleClear}
            />
            <button onClick={this.handleClear}>
              Reset
            </button>
          </div>
        <div className="category-title" value={this.handleCategoryChange}>{this.handleCategoryChange}</div>
          <section className="resources">
            {resources.map((resources, i) => (
              <ResourceItem
                link={resources.link}
                logo={resources.logo}
                title={resources.title}
                about={resources.about}
                category={resources.category}
                key={i}
              />
            ))}
          </section>
        </div>
      </div>
    );
    }
}