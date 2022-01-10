import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <section className="navlinks">
          <Link to="/">Home</Link>
          <Link to="/resourcelist">Resources</Link>
          <Link to="/suggestions">Suggestions</Link>
          <Link to="/about">About</Link>
        </section>
      </div>
    );
  }
}
