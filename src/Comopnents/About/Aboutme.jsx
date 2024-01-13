import React from "react";
import BTN from "../Home/BTN";
import resume from "../../Documents/Resume.pdf";
import desc from "../My info/desc.json"
import Yellow from "./Yellow-key";
import Contact from "../My info/contact";



function Aboutme() {


  return (
    <div id="About-info">
      <h2>I'm Krushna</h2>
      <h3>Software Engineer</h3>
      <p id="Ds">
        {desc.mydesc}
      </p>

    <div id="contact">
    
    {Contact.map((noteItem) => (
          <Yellow
            keyy={noteItem.keyy}
            value={noteItem.val}
          />
        ))}
    </div>

      <BTN typ="btn1" value="Resume" down={resume} icon="0"/>

    </div>
  );
}

export default Aboutme;
