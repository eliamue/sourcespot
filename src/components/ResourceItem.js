import React, { Component } from "react";

export default class ResourceItem extends Component {
  render() {
    return (
      <div className="resources">
        <p className="category-tag">
          <img src={`${process.env.PUBLIC_URL}/${this.props.category}.png`} className="category-icon" alt={this.props.category}/>
          {this.props.location}
        </p>
        <h2 className="src-title">{this.props.title}</h2>
        <a href={this.props.link} alt={this.props.title}>
          <img src={this.props.logo} className="logo" alt={this.props.title} />
        </a>
        <section>
          <p className="description">{this.props.about}</p>
        </section>
      </div>
    );
  }
}