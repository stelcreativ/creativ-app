import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {


    render() {
        return (
            <div>
                <nav className="blue darken-2">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">Guess</a>
                        <a data-target="main-menu" className="sidenav-trigger"><i className="fa fa-bars"></i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/guessme">GuessMe</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                        <ul className="sidenav" id="main-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/guessme">GuessMe</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </div>

                </nav>
            </div>
        )
    }
}
