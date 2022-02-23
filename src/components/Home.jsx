import React, { Component } from "react";
import "../styles/Home.css";
import Nav from "./Nav.jsx";
import logo from "../assets/logo.png";
import headache from "../assets/headache.png";
import SearchList from "./SearchList.jsx";
import About from "./About";
import Categories from './categories/Categories.jsx';

export default class Home extends Component {
  constructor() {
    super();

    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    this.state = {
      currentDate: date,
    };
  }

  render() {
    return (
      <div className="full-body">
        <section id="home" className="home-container">
          <Nav />
          <div className="home-description">
            <header className="page-head">
              <div className="title1">SOURCE</div>
              <div className="title2">SPOT</div>
            </header>
            <p>
              A one-stop shop for resources to help TBI survivors with recovery,
              symptom management, and accessibility in day-to-day life.
            </p>

            <div>
              <img src={headache} alt="Person with headache" />
              <p>
                From technologies to reduce symptoms caused by bright white
                screens to products to help manage overstimulation, sourceSPOT
                compiles quality resources for improving life with a brain
                injury.
              </p>
            </div>
          </div>
        </section>
        <img src={logo} id="resourcelist" className="main-logo" alt="logo" />
        <section id="resources">
          <div className="list-header">
            <h1 className="list-title">Resources</h1>
            <div className="resources-prompt">
              Search for a resource by keyword or filter by category:
              <Categories />
            </div>
          </div>
          <SearchList />
        </section>
        <img src={logo} className="main-logo" alt="logo" />
        <section id="about">
          <About />
        </section>
        <footer>
          <div>Elise Muellerleile &copy; 2022</div>{" "}
          <div>Last updated {this.state.currentDate}</div>
        </footer>
      </div>
    );
  }
}
