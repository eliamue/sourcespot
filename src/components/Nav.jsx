import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <section className="navlinks">
          <Link to="/">Home</Link>
          <Link to="/search">Resources</Link>
          <Link to="/about">About</Link>
        </section>
      </div>
    );
  }
}
