import React from 'react';
import Title from '../Genral/Title-name';
import "./certificate.css"
import CerCard from './CerCard';
import Cert from '../My info/certificates';

function CertificatePage()
{
    return(
        <div id='Certificate'>
            <Title second="Certificates" icon="4" />
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
        </div>
    );
}
export default CertificatePage;