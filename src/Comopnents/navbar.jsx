import React from "react";
import logo from "../Images/Logo.png";

function Navbar() {
  return (
    <div className="nav">
      <a href="/">

      <img src={logo} alt="" />
      </a>
      <div id="Navcontent">

        <div>
        <a href="/">
          <p>Home</p>
        </a>
        </div>
        <ul>
          <a href="/#about">
            <li>About</li>
          </a>
          <a href="/skills">
            <li>Skills</li>
          </a>
          <a href="/education">
            <li>Education</li>
          </a>
          <a href="/#Project">
          <li>Work</li>
          </a>
          <a href="/experince">
          <li>Experience</li>
          </a>
          <a href="/certificate">
          <li>Certificate</li>
          </a>
          <a href="/contactme">
          <li>Contact Me</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
