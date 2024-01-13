import React from 'react';
import ProjectCard from './Project/ProjectCard';
import Title from "./Genral/Title-name";
import ProBack1 from "../Images/ProBack1.png"
import ProBack2 from "../Images/ProBack2.png"
import ProBack3 from "../Images/ProBack3.png"
import ProBack4 from "../Images/ProBack4.png"

      
function Project(props)
{
    return(
        <div id = "Project" style={{backgroundColor:'#151515' }}>
            
        <Title second="Projects" icon="3" />
        <p style={{textAlign:'center' , fontFamily:'ubuntu' , marginTop:'5px' , width:'100%'}}>Building knowledge for a better future</p>

        <div id='projectContainer'>
            <ProjectCard title="LocalKart" background={ProBack1} info="LocalKart is an e-commerce platform that provides customers with a convenient and easy way to purchase groceries, vegetables, dairy products, and household goods from local stores. " view="https://krushnx.github.io/Localkart/test.html" git="https://github.com/krushnx/Localkart" shortDesc= "An e-commerce platform for grocery and household shopping."/>
            <ProjectCard title="Hotel Lamonade" background={ProBack2} info="Hotel Lamonade is a web-based hotel booking platform that streamlines the booking experience, making it easier and more efficient for customers to make and manage reservations." view="https://krushnx.github.io/Hotel-Lamonade/Index.html" git="https://github.com/Krushnx/Hotel-Lamonade" shortDesc="A hotel booking platform that simplifies the booking process for customers."/>
            <ProjectCard title="Survey Form" background={ProBack3} info="The survey form is a web-based tool that enables users to collect feedback and opinions from their audience. It streamlines the process of creating and distributing surveys, making it easier and more efficient to gather valuable insights and data." git="https://github.com/Krushnx/Survey-Form" view="https://krushnx.github.io/Survey-Form/index.html" shortDesc="A tool for creating and distributing surveys to gather valuable insights and data"/>
            <ProjectCard title="Feel The Beat" background={ProBack4} info="Feel the Beat is a website that offers a range of dance classes for people of all ages and levels, aimed at promoting fitness, self-expression, and joy through dance." shortDesc="Dance classes website for all ages" view="https://krushnx.github.io/Feelthebeat/Index.html" git="https://github.com/Krushnx/Feelthebeat"/>
        </div>
        
        </div>
    );
}
export default Project;