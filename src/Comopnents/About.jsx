import React from "react";
import Bitmoji from "./Genral/Bitmoji";
import icon from "../Images/Bitmoji.png"
import Title from "./Genral/Title-name";
import Aboutme from "./About/Aboutme";
import Tagline from "./Genral/Tagline";
// import Mastercard from "./Genral/MasterCard";


function About()
{
    return(
        <div id="abt">

        <div id="about">
            <Title first='About' second='Me' icon='0'/>
            <Tagline value="Dedicated to excellence, committed to innovation" />
            <div id="Aboutme">
            {/* <Mastercard /> */}
            <Bitmoji src={icon}/>
            <Aboutme />
            </div>
        </div>
        </div>
    );
}


export default About;