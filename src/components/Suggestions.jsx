import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from './Nav';


export default class Suggestions extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Link to="/suggestions/add">Add Resource</Link>
                
            </div>
        )
    }
}
