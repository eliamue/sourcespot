import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <section>
          <Link to="/">Home</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/tech">Tech</Link>
          <Link to="/about">About</Link>
        </section>
      </div>
    );
  }
}
