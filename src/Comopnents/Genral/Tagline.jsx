import React from 'react';
function Tagline(props)
{
    return(
        <p style={{textAlign:'center' , marginBottom:'-30px' , fontFamily:'ubuntu' , marginTop:'5px' , width:'100%'}}>{props.value}</p>
    );
}
export default Tagline;