import React, { Component } from "react";
import "../styles/Home.css";
import Nav from "./Nav.jsx";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar.jsx";
import About from "./About";

export default class Home extends Component {
  render() {
    return (
      <div className="full-body">
        <section id="home" className="home-container">
          <Nav />
          <header className="home-header">TBI Resources</header>
          <p className="home-description">
            A one-stop shop for resources to help TBI survivors with recovery,
            symptom management, and accessibility in day-to-day life.
          </p>
        </section>
        <img src={logo} className="main-logo" alt="logo" />
        <section id="resources">
            <h1 className="list-header">Resources</h1>
          <SearchBar />
        </section>
        <img src={logo} className="main-logo" alt="logo" />
        <section id="about">
          <About />
        </section>
      </div>
    );
  }
}
