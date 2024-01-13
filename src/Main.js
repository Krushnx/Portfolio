import React from "react";
import About from "./Comopnents/About";
import Eduaction from "./Comopnents/Education";
import ScrollButton from "./Comopnents/Genral/scrollButton";
import Home from "./Comopnents/Home";
import Project from "./Comopnents/Project";
import Skills from "./Comopnents/Skills";
import Experince from "./Comopnents/Experince";
import Certificate from "./Comopnents/Certificate/certificate";
import Foot from "./Comopnents/Footer/footer";

function Main() {

  return (
    <div>

    
      <Home />
      <About />
      <Skills />
      <Eduaction />
      <Project />
      <Experince />
      <ScrollButton />
      <Certificate />
      <Foot />
    </div>
  );
}

export default Main;
