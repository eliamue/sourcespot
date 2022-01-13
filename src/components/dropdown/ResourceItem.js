import React, { Component } from "react";

export default class ResourceItem extends Component {
  render() {
    return (
      <div className="resources">
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