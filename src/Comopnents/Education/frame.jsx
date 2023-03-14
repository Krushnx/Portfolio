import React from "react";
import ColorChangingText from "./LeftToRight";
function Frame(props) {


  function porc()
  {
    const isMobile = window.innerWidth <= 600;

    let myc = props.c;
    let value = props.poc ? "Pursuing" : "Completed";
    return  <h3 id="P" style={isMobile ? { display:'none'} : {color:myc}}><i class="fa fa-circle"></i>{value}</h3>;

  }

  return (
    <div id="Frame">
      <div>
        <img style={props.poc ? {filter:"grayscale(0%)"}:{cursor:'pointer'}} src={props.image} alt=""/>
        <h3 style={{textAlign:"center" ,cursor:"pointer" , color:"#01baef"}}>{props.duration}</h3>
      </div>
      <div id="clginfo">
        <div id="Clgname">
          <a href={props.link} >

        <ColorChangingText value={props.clg} />
          </a>
        {porc()}
        </div>
        <h2 style={{color:"#01baef"}}>{props.degree}</h2>
        <h2 style={{color:"#505050" , fontSize:"17px"}} >{props.uni}</h2>
        <h2 style={{color:"#999999" , fontSize:"17px"}} >Grade : {props.marks}</h2>
      </div>

    </div>
  );
}
export default Frame;
