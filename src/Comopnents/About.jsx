import React from "react";
import Bitmoji from "./Genral/Bitmoji";
import Title from "./Genral/Title-name";
import icon from "../Images/Bitmoji.png"
import Aboutme from "./About/Aboutme";
import Tagline from "./Genral/Tagline";


function About()
{
    return(
        <div id="abt">

        <div id="about">
            <Title first='About' second='Me' icon='0'/>
            <Tagline value="Dedicated to excellence, committed to innovation" />
            <div id="Aboutme">
            <Bitmoji src={icon}/>
            <Aboutme />
            </div>
        </div>
        </div>
    );
}


export default About;