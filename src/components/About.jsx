import React, { Component } from "react";
import Nav from "./Nav";
import "../styles/About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Nav />
        <p>About me</p>
      </div>
    );
  }
}
