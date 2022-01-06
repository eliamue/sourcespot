import React, { Component } from 'react'
import Nav from './Nav';
import "../styles/Tech.css";

export default class Tech extends Component {
    render() {
        return (
            <div>
                <Nav />
                <header>Tech links: dark mode, etc</header>
                <ul>
                    <li>
                        Dark Reader
                    </li>
                    <li>
                        f.lux
                    </li>
                </ul>
            </div>
        )
    }
}
