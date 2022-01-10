import React, { Component } from "react";

export default class FilterDropdown extends Component {
  render() {
    return (
      <div>
        <label>
          Looking for something in particular?
          <select onChange={this.handleCategoryChange}>
            <option value="">All</option>
            <option value="1">Accessibility</option>
            <option value="2">Advocacy</option>
            <option value="3">Education</option>
            <option value="4">Products</option>
          </select>
        </label>
      </div>
    );
  }
}
