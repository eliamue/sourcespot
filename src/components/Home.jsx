import React, { Component } from 'react';
import '../styles/Home.css';
import Nav from './Nav'
import logo from '../assets/logo.png'

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Nav />
                <img src={logo} alt="logo" />
            </div>
        )
    }
}
