import React from 'react';
import Title from "./Genral/Title-name";
import PCard from './Project/PCard';
import img1 from './Project/images/1.png'
import img2 from './Project/images/2.png'
import img3 from './Project/images/3.png'
import img5 from './Project/images/5.png'
import img6 from './Project/images/6.png'
import img7 from './Project/images/7.png'
      
function Project(props)
{
    return(
        <div id = "Project" style={{backgroundColor:'#151515' }}>
            
        <Title second="Projects" icon="3" />
        <p style={{textAlign:'center' , fontFamily:'ubuntu' , marginTop:'5px' , width:'100%'}}>Building knowledge for a better future</p>

        <div id='projectContainer'>
            <PCard img={img1} title="TrekTravel" desc="A sleek travel guide website featuring a ReactJS front-end, NodeJS/ExpressJS back-end with MongoDB Atlas. Enhanced security through JWT authentication and Cookie handling, simplifying journey planning for users." viewlink="https://trek-tide.web.app/" gitlink="https://github.com/Krushnx/trektravel"  />
            <PCard img={img2} title="E-Ticket-Connect" desc="A bus management system enabling cashless ticket booking for passengers, providing e-tickets for a paperless experience. Conductors benefit from easy ticket verification, route management, and insightful reports." gitlink="https://github.com/Krushnx/eTikcetConnect" viewlink="https://e-ticketconnect.web.app/" />
            <PCard img={img3} title="LocalKart" desc="An e-commerce platform simplifying local grocery and household goods shopping. Crafted a responsive HTML, CSS, and JavaScript frontend for an intuitive, user-friendly interface, ensuring seamless purchases from nearby stores." viewlink="https://krushnx.github.io/Localkart/test.html" gitlink="https://github.com/Krushnx/Localkart"  />
            <PCard img={img5} title="Hotel-Lamonade" desc=" Your go-to hotel website for seamless booking of rooms and delicious dining experiences. Simplify your travel planning by reserving accommodations and ordering delectable meals directly through our platform." viewlink="https://krushnx.github.io/Hotel-Lamonade/Index.html" gitlink="https://github.com/Krushnx/Hotel-Lamonade"  />
            <PCard img={img6} title="Chat-Parser" desc="Effortlessly analyze WhatsApp conversations with our chat parser. Simply upload a text file exported from WhatsApp, and experience organized and formatted insights from your chats in no time." viewlink="" gitlink=""  />
            <PCard img={img7} title="Feel The Beat" desc="Dive into the world of dance on our class website offering a variety of dance styles. From salsa to hip-hop, elevate your moves with our diverse dance classes." viewlink="https://krushnx.github.io/Feelthebeat/Index.html" gitlink="https://github.com/Krushnx/Feelthebeat"  />
        </div>
        
        </div>
    );
}
export default Project;