import React from 'react';
import Title from '../Genral/Title-name';
import "./certificate.css"
import CerCard from './CerCard';
import Cert from '../My info/certificates';
import BTN from '../Home/BTN';

function Certificate()
{
    return(
        <div id='Certificate'>
            <Title first="Certificates &" second="Achivements" icon="5" />
            <p style={{textAlign:'center' , fontFamily:'ubuntu' , marginTop:'5px' , width:'100%'}}>Experience is the best teacher, and I've learned a lot.</p>
            
            <div id="CerContent">
            {Cert.map((noteItem) => (
          <CerCard
            src={noteItem.course}
            name={noteItem.name}
            subtitle={noteItem.subtitle}
            course = {noteItem.src}
          />
        ))}
            </div>
            <div style={{display:'flex' , justifyContent:'center'}}>
            <BTN typ="btn1" value="View More"  icon="6" down="/certificate"/>

            </div>
        </div>
    );
}
export default Certificate;