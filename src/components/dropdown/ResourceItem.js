import React, { Component } from "react";

export default class ResourceItem extends Component {
  render() {
    return (
      <div className="resources">
        <h2>{this.props.title}</h2>
        <a href={this.props.link} alt={this.props.title}>
          <img src={this.props.logo} className="logo" alt={this.props.title} />
        </a>
        <section>
          <p className="description">{this.props.about}</p>
        </section>
        <img
          src="https://freepngimg.com/thumb/decorative_line_black/11-2-decorative-line-black-png-picture.png"
          alt=""
        />
      </div>
    );
  }
}