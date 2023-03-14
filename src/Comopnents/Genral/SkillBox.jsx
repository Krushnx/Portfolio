import React from 'react';
function SkillBox(props)
{
    return(
        <div id='SkillBox'>
            <img src={props.src} alt="" />
            <h3>{props.name}</h3>
        </div>
    );
}
export default SkillBox;