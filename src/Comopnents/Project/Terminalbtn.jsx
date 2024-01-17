import React from 'react';
function Terminalbtn(props)
{
    console.log("link ==> " , props.link);
    return(
    <a  className="terlink" href={props.link}>
        {props.content}  <i class="fa fa-code" />
    </a>

);
}
export default Terminalbtn;