import React from 'react';
import Title from './Genral/Title-name';
import MCOE from '../Images/AICTE.png'
import workabl from '../Images/workabl.png'
import ExFrame from './Experince/Exframe';



function Experince()
{
    return(
        <div id='Experince' style={{marginTop:'-10px'}}>

            <Title second="Experience" icon="4" />
            <p style={{textAlign:'center' , fontFamily:'ubuntu' , marginTop:'5px' , width:'100%'}}>Experience is the best teacher, and I've learned a lot.</p>
            <ExFrame link = "https://drive.google.com/file/d/1eeefhw-XJEIyubnZQRCg6jIHY6OlfPjY/view" clg="Full Stack Developer Intern" duration="Apr - May 2023" image={workabl} poc={true} degree="Infrings Technology Pvt Ltd" marks="89.60 %"   location="Pune" listValue1="Developed a production-grade event page for Workabl, utilizing ReactJS, Node.js, and MySQL technologies and implemented REST APIs with Node.js and Sequelize for efficient database management." listValue2="Conducted comprehensive testing of the APIs using Postman to ensure robustness and reliability, and implemented input validation using Joy for data integrity." listValue3="Collaborated closely with the team, adhering to agile development methodologies, and contributed to key features such as user-friendly event creation interfaces, secure user authentication, and optimized backend functionalities."/>
            <ExFrame link = "https://drive.google.com/file/d/1_TQvOZVsU0ccplWF_GwnIrJQU2o_lNbE/view" clg="Web Development and Designing Intern" duration="Feb - Mar 2023" image="https://media.licdn.com/dms/image/C4E0BAQHfk_O8amPovQ/company-logo_200_200/0/1642532597169?e=2147483647&v=beta&t=d5ptvJvSiIIZY44K2Qj9iEi_yimrIVAqxJIb8OTGNRA" poc={false} degree="Oasis Infobyte"  c='red' listValue1="Gained experience with front-end technologies like HTML, CSS, JavaScript, and popular frameworks like React" listValue2="Worked on three front-end web development projects during the internship, including a responsive Tribute Page" listValue3="Demonstrated proficiency with front-end development tools and libraries like CSS preprocessors, front-end build tools"  location="India (Remote)" />
            <ExFrame link = "https://drive.google.com/file/d/1qF9pvf3t3DcrXM12sEGdfxzI92-a5EnE/view" clg="AI-ML Virtual Intern" duration="Dec 2022 - Feb 2023" image={MCOE} degree="All india council for technical education" listValue1="Completed a 10-week internship focused on the fundamentals of AI and machine learning." listValue2="Gained hands-on experience with programming languages like Python and R, as well as libraries like Pandas , Numpy, scikit-learn, Matplotlib" listValue3="Built and trained basic machine learning models using various algorithms like decision trees, random forests" location="India (Remote)" c='red'  poc={false} />
            
        </div>
    );
}
export default Experince;