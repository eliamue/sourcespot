import React, { Component } from "react";

export default class ResourceItem extends Component {
  render() {
    return (
      <div className="resources">
        <div className="category-tag">
          <img
            src={`${process.env.PUBLIC_URL}/${this.props.category}.png`}
            className="category-icon"
            alt={this.props.category}
          />
          <div className="location-disc">{this.props.location}</div>
        </div>
        <h2 className="src-title">{this.props.title}</h2>
        <a href={this.props.website} alt={this.props.title}>
          <img src={this.props.logo} className="logo" alt={this.props.title} />
        </a>
        <section>
          <div className="description">{this.props.about}</div>
        </section>
      </div>
    );
  }
}