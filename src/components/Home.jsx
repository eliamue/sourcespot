import React, { Component } from "react";
import "../styles/Home.css";
import Nav from "./Nav.jsx";
import logo from "../assets/logo.png";
import anilogo from "../assets/sourcespot-logo.gif";
import SearchBar from "./SearchBar.jsx";
import About from "./About";

export default class Home extends Component {
  render() {
    return (
      <div className="full-body">
        <section id="home" className="home-container">
          <Nav />
          <header className="home-header"><img src={anilogo} className="ani-logo" alt="sourceSPOT logo" /></header>
          <p className="home-description">
            A one-stop shop for resources to help TBI survivors with recovery,
            symptom management, and accessibility in day-to-day life.
          </p>
        </section>
        <img src={logo} className="main-logo" alt="logo" />
        <section id="resources">
          <div className="list-header">
            <h1 className="list-title">Resources</h1>
            <p className="resources-prompt">
              Search for a resource by keyword or filter by category: 
              <br></br>
              Accessibility - Advocacy - Education - Legal - Products - Services
            </p>
          </div>
          <SearchBar />
        </section>
        <img src={logo} className="main-logo" alt="logo" />
        <section id="about">
          <About />
        </section>
        <footer>Elise Muellerleile &copy; 2021</footer>
      </div>
    );
  }
}
