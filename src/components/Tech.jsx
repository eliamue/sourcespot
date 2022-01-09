import React, { Component } from 'react'
import Nav from './Nav';
import "../styles/Tech.css";
import darkreader from "../assets/dark-reader.png";

export default class Tech extends Component {
    render() {
        return (
            <div>
                <Nav />
                <header>Tech links: dark mode, etc</header>
                <ul className="tech-list">
                    <li>
                        <a href="https://darkreader.org/"><img src={darkreader} className="darkreader-logo" alt="Dark Reader logo" /></a>
                    </li>
                    <li>
                        f.lux
                    </li>
                </ul>
            </div>
        )
    }
}
