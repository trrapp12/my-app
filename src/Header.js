import React from "react";

function Header() {
  return (
    <header>
      <nav className="nav-container">
        <img src="./react-logo.png" className="logo" />
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
