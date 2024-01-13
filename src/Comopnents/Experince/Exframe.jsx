import React from "react";
import ColorChangingText from "../../Comopnents/Education/LeftToRight";
import BTN from "../Home/BTN";


function ExFrame(props) {


  // function porc()
  // {
  //   const isMobile = window.innerWidth <= 600;

  //   let myc = props.c;
  //   let value = props.poc ? "Pursuing" : "Completed";
  //   return  <h3 id="P" style={isMobile ? { display:'none'} : {color:myc}}><i class="fa fa-circle"></i>{value}</h3>;

  // }

  return (
    <div id="Frame">
      <div>
        <img style={{filter:"grayscale(0%)" , cursor:'pointer'}} src={props.image} alt=""/>
        <h3 style={{textAlign:"center" ,cursor:"pointer" , color:"#01baef"}}>{props.duration}</h3>
        <h2 style={{color:"#505050" , fontSize:"17px" , textAlign:'center'}} >{props.location}</h2>

      </div>
      <div id="clginfo">
        <div id="Clgname">
          <a href={props.link} >

        <ColorChangingText value={props.clg} />
          </a>
        {/* {porc()} */}
        <BTN typ="btn1" value="Certificate"  icon="5" down = {props.link}/>
        

        </div>
        <h2 style={{color:"#01baef"}}>{props.degree}</h2>
        <ul style={{marginTop:'10px'}}>
          <li style={{color:"#999999" , fontSize:"17px" , marginLeft:'20px'}} >{props.listValue1}</li>
          <li style={{color:"#999999" , fontSize:"17px" , marginLeft:'20px'}} >{props.listValue2}</li>
          <li style={{color:"#999999" , fontSize:"17px" , marginLeft:'20px'}} >{props.listValue3}</li>
        </ul>
      </div>

    </div>
  );
}
export default ExFrame;
