import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/Nav.css";
import logo from "../assets/sourcespot-trp.png";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
          <img src={logo} className="nav-logo" alt="sourceSPOT logo" />
        <section className="navlinks">
          <Link className="nav-a" to="/#home">
            Home
          </Link>
          <Link className="nav-a" to="/#resources">
            Resources
          </Link>
          <Link className="nav-a" to="/#about">
            About
          </Link>
        </section>
      </div>
    );
  }
}
