import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="nav-bar">
            <div id="logo"></div>
            {/* Desktop Menu - only appears on large screens */}
            <ul id="nav-menu">
            <li>
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
                <Link to="/about" className="nav-link">About</Link>
            </li>
            <li>
                <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            </ul>
        </div>
    )
};

export default Header