import React from "react";

const NavBar = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        Portfolio.
      </a>
      <nav className="navbar">
        <a href="#" className="active" style={{ "--i": 1 }}>
          Home
        </a>
        <a href="#about" style={{ "--i": 2 }}>
          About
        </a>
        <a href="#skills" style={{ "--i": 3 }}>
          Skills
        </a>

        <a href="#projects" style={{ "--i": 4 }}>
          Projects
        </a>
        <a href="#contact" style={{ "--i": 5 }}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
