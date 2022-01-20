import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <section className="navlinks">
          <Link to="/#home">Home</Link>
          <Link to="/#resources">Resources</Link>
          <Link to="/#about">About</Link>
        </section>
      </div>
    );
  }
}
