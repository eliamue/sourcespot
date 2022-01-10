import React, { Component } from "react";

export default class FilterDropdown extends Component {
  render() {
    return (
      <div>
        <label>
          Looking for something specific?
          <select onChange={this.handleHornsChange}>
            <option value="">All</option>
            <option value="1">Accessibility</option>
            <option value="2">Advocacy</option>
            <option value="3">Three horns</option>
          </select>
        </label>
      </div>
    );
  }
}
