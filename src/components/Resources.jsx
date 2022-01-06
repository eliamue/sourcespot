import React, { Component } from "react";
import Nav from "./Nav";

export default class Resources extends Component {
  render() {
    return (
      <div>
        <Nav />
        <header>
          Links for professional resources like Brain Injury Alliance. etc
        </header>
        <ul>
          <li>Brain Injury Alliance</li>
          <li>TBI Support Facebook Group</li>
        </ul>
      </div>
    );
  }
}
