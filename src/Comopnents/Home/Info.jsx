import React from "react";
import BTN from "./BTN";
import Bubble from "./bubble";
import Links from "./Links";
import resume from "../../Documents/Resume.pdf";
import 'animate.css';



function Info()
{
    return(
        <div id="info">
        <Bubble value="Hello I am" />

        <h1 id="Name" >Krushna</h1><h1 id="Name2" className="animate__animated  animate__zoomIn">Nagare</h1>
        <div id="Mix">
          <h1>I'm Into</h1>
          {/* <Typewriter className="typewrite" options={{  strings: ["Programming", "Web Development", "Flute Playing"],  autoStart: true,  loop: true,}}/> */}
      
          <h1>
            <a href="#_" className="typewrite" data-period="6000" data-type='[ "Programming", "Web Development", "Flute Playing" ]'><span className="wrap" /></a>
          </h1>
        </div>
        <BTN typ="btn1" value="Resume" down={resume} icon="0" flag={true}/>
        <BTN typ="btn2" value="My work" down="#Project" flag={false}/>
        <div>
        <Links />
        </div>

      </div>
    );
}

export default Info;