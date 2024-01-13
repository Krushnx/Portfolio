import React from 'react';
function SkillBox(props)
{
    // const { flag } = props;

    console.log(props.flag);
    return(
        <div id='SkillBox'>
            <img src={props.src} alt=""  className={props.name === "React JS" ? 'rotate' : '' || (props.name ==="ExpressJS") ? 'whiteback' : ''} />
            <h3>{props.name}</h3>
        </div>
    );
}



export default SkillBox;