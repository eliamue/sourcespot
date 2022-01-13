import React, { Component } from 'react';
import '../styles/Home.css';
import Nav from './Nav'
import logo from '../assets/logo.png'

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Nav />
                <header className="home-header">TBI Resources</header>
                <img className="home-logo" src={logo} alt="logo" />
                <p className="home-description">
                    A one-stop shop for resources to help TBI survivors with recovery, symptom management, and accessibility in day-to-day life.
                </p>
            </div>
        )
    }
}
