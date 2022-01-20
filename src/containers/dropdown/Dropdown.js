import React, { Component } from "react";

export default class Dropdown extends Component {
  render() {
    return (
      <div>
        <label>
          <select onChange={this.props.handleChange} className="dropdown_item">
            {this.props.options.map((optionString) => (
              <option value={optionString}>{optionString}</option>
              ))}
          </select>
        </label>
      </div>
    );
  }
}
