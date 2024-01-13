import { React, useRef } from "react";
import Pic from "../Images/Pic.png";
import moboile from "../Images/Pic3.png";
import { ParticleBackground } from "./Genral/Paricle";
import Info from "./Home/Info";



function Home() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize.current[0]);

  const display = window.innerWidth >= 650 ? Pic : moboile;

  return (
    <div id="home">
      <img src={display} alt="" className="animate__animated  animate__zoomIn"/>
      <Info />
      <ParticleBackground />
    </div>
  );
}

export default Home;
