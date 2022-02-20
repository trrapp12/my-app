import React from "react";
import reactLogo from "../src/images/react-logo.png";

function Header() {
  return (
    <header>
      <nav className="nav-container">
        <img src={reactLogo} className="logo" />
        <ul className="nav-ul">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
