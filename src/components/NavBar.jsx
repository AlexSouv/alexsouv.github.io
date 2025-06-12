import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <h1 className="logo"> MySite</h1>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
        </nav>
    );
}

export default NavBar;