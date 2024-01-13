import React from 'react';
import Frame from './Education/frame';
import Title from './Genral/Title-name';
import MCOE from '../Images/MCOE.png'

function Eduaction()
{
    return(
        <div id='Education' >

            <Title second="Education" icon="2" />
            <p style={{textAlign:'center' , fontFamily:'ubuntu' , marginTop:'5px' , width:'100%'}}>Building knowledge for a better future</p>
            <Frame clg="PES Modern College of Engineering Pune" duration="2020-2024" image={MCOE} poc={true} degree="Bachelor of Information Technology Engineering" uni="Savitribai Phule Pune University" marks="9.10 GPA" link="https://moderncoe.edu.in/"/>
            <Frame clg="Keshav Govind Mahavidyalaya Belapur Bk" duration="2018-2020" image="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHw%3D&w=1000&q=80" poc={false} degree="Higher Secondary Schooling (HSC)" uni="Maharashtra State Board" c='red' marks="73.23 %"/>
            <Frame clg="New English School Ukkalgaon" duration="2008-2018" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGudPU4qIYLjXYxN7sF2JBScLqMgMRdWr7kw&usqp=CAU" poc={false} degree="Secondary Schooling (SSC)" uni="Maharashtra State Board" c='red' marks="89.60 %"/>
        </div>
    );
}
export default Eduaction;