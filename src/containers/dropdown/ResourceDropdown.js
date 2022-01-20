import React, { Component } from "react";

export default class FilterDropdown extends Component {
  render() {
    return (
      <div>
        <label>
          <select onChange={this.handleCategoryChange}>
            <option value="">All</option>
            <option value="1">Accessibility</option>
            <option value="2">Advocacy</option>
            <option value="3">Education</option>
            <option value="4">Products</option>
            <option value="5">Services</option>
          </select>
        </label>
      </div>
    );
  }
}
