import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="nav-bar">
      <div>
        <Link to="/">
          <img src="public/image/daily-planet-logo.png" alt="Home" id="logo" />
        </Link>
      </div>
      {/* Desktop Menu - only appears on large screens */}
      <ul id="nav-menu">
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
