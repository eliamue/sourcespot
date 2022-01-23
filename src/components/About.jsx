import React, { Component } from "react";
// import { Link } from "react-router-dom";
import MailTo from "./MailTo";
import "../styles/App.css";
import "../styles/About.css";
import me from "../assets/me.jpg";
// import elogo from '../assets/email.png';

export default class About extends Component {
  render() {
    return (
      <div className="about-sug-container">
        <div className="profile">
          <img src={me} className="me-img" alt="Elise Muellerleile" />
          <section className="bio-section">
            <h1 className="about-header">About</h1>
            <p className="bio-para">
              I'm Elise Muellerleile, a full-stack software engineer from St
              Paul, Minnesota. As a TBI surviver myself, I know how crucial good
              resources are to recovery and symptom management. I created this
              site in order to compile a list of resources that either
              personally helped me in recovery and symptom management, or was
              recommended by a specialist or other TBI survivor.
            </p>
            <section className="link-section">
              <a
                className="my-links"
                href="https://www.linkedin.com/in/eliamue/"
                alt="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                className="my-links"
                href="https://github.com/eliamue"
                alt="LinkedIn"
              >
                GitHub
              </a>
              <a
                className="my-links"
                href="https://eliamue.netlify.app/"
                alt="LinkedIn"
              >
                Portfolio
              </a>
            </section>
          </section>
        </div>

        <section className="suggestions">
          <h1 className="sug-header">Have a Suggestion?</h1>
          <p>
            Big or small, input is always welcome as sourceSPOT is actively in
            development. Whether you have a resource you'd like to see added to
            the list, have a suggestion for improving accessibility, or found a
            dead link, please reach out!
          </p>
          <div className="email-link">
            <MailTo label="Contact Me" mailto="mailto:eliamue@live.com" />
          </div>
        </section>
      </div>
    );
  }
}
