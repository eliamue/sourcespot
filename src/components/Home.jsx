import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/Home.css';
import Nav from './Nav'

export default class Home extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <p className="home_head">Home</p>
            </div>
        )
    }
}
