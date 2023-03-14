import React from "react";
import About from "./Comopnents/About";
import Eduaction from "./Comopnents/Education";
import ScrollButton from "./Comopnents/Genral/scrollButton";
import Home from "./Comopnents/Home";
import Navbar from "./Comopnents/navbar";
import Project from "./Comopnents/Project";
import Skills from "./Comopnents/Skills";

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Eduaction />
      <Project />
      <ScrollButton />
    </div>
  );
}

export default App;
