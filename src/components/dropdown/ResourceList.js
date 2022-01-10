import React, { Component } from 'react';
import ResourceItem from './ResourceItem.js';
import data from './data.js';
import Dropdown from './Dropdown.js';
import Nav from '../Nav.jsx';
import './List.css';

export default class ImageList extends Component {

    state = {
        filteredCategories: ''
    }

    handleCategoryChange = (event) => {
        this.setState({ filteredCategories: event.target.value })
    }

    render() {

        let resources = data;

        if (this.state.filteredCategories) {
            resources = data.filter(resources => resources.category === this.state.filteredCategories)
        }

        const categoryOptions = Array.from(new Set(resources.map(resources => resources.category)));

    return (
      <div>
        <Nav />
        <label>Filter by Category</label>
        <Dropdown
          options={categoryOptions}
          handleChange={this.handleCategoryChange}
        />

        <section className="infodump">
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
    );
    }
}