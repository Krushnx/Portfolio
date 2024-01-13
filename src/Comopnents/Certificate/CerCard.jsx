import React from 'react';
function CerCard(props)
{
    return(
        <div id='SkillBox' style={{height: "150px", width:"160px"}}>
            <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={props.src} alt="Paris"  />
    </div>
    <div class="flip-box-back">
      <img src={props.course} alt="Paris"  />
      
    </div>
  </div>
</div>
            <h3>{props.name}</h3>
            <p>{props.subtitle}</p>
        </div>
    );
}



export default CerCard;