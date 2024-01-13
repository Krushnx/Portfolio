import React from 'react';
import BTN from "../Home/BTN";


function ProjectCard(props) {
  const { title, info, background } = props;


  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content" >
            <div className='back-content-info'>
              <div className='back-content-img'>
                <img src={background} alt=""  style={{objectFit:'cover' , width:'100%' , height:'100%' , zIndex:'-100'}}/>
              </div>
              <h2>&nbsp;&nbsp;&nbsp;{title}
              <p>&nbsp;&nbsp;{props.shortDesc}</p>
              </h2>
            </div>
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>
          <div className="front-content">
            <small className="badge">{title}</small>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', fontFamily: 'ubuntu' }}>{title}</h1>
            <h4 style={{ margin: '0px 10px' }}>{info}</h4>
            <div>
              <BTN typ="btn1" value="View" icon="1" down={props.view}/>
              <BTN typ="btn2" value="Github" icon="4" down={props.git} />
            </div>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>Tech Stack Used</strong>
                </p>
              </div>
              <p className="card-footer">
                HTML &nbsp; | &nbsp; CSS | &nbsp; JavaScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
