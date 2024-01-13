import React from "react";

function Title(props)
{
    const logos = ['fa fa-user','fa fa-laptop' ,'fa fa-graduation-cap' , 'fa fa-code' , 'fa fa-briefcase' , 'fa fa-certificate' , 'fa fa-address-book']


    let value =  Number(props.icon); 


    
    return(
        <div id="Title">
            <h1><i class={logos[value]} ></i>{props.first}</h1><h1>{props.second}</h1>
        </div>
    );
}
 
export default Title;