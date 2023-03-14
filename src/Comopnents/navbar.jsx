import React from "react";
import logo from "../Images/Logo.png";

function Navbar() {
  return (
    <div className="nav">
      <img src={logo} alt="" />
      <div id="Navcontent">
        <div>
          <p>Home</p>
        </div>
        <ul>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#Skills">
            <li>Skills</li>
          </a>
          <a href="#Education">
            <li>Education</li>
          </a>
          <a href="#Project">
          <li>Work</li>
          </a>
          <li>Experience</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
