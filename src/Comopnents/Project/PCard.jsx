import React from 'react';
import './projectCard.css';
import Terminalbtn from './Terminalbtn';
import img from './images/6.png'
function PCard(props) {


    const cardFrontStyles = {
        background: `url(${props.img})`,
        backgroundSize: 'cover',
    };

    return (
        <div class="project-card">
            <div class="card-inner">
                <div class="card-front" style={cardFrontStyles}>
                </div>
                <div class="card-back">
                    <div className="card-top-line">
                        <div className="card-circle"></div>
                        <div className="card-circle"></div>
                        <div className="card-circle"></div>
                        <p>Project : {props.title}</p>
                    </div>
                    <div className="project-info">
                        <span className='info-title'>{props.title}@Description:</span>
                        <span className='info-title-2'>~:$</span>
                        <div className="actual-info">
                            {props.desc}
                            <span className='blinker'></span>
                        </div>
                        <span className='info-title'>{props.title}@Implementation:</span>
                        <span className='info-title-2'>~:$</span>
                        <div className="actual-info">
                            {console.log(props.viewlink)}
                            Hosted Website : <Terminalbtn content="View " link={props.viewlink} /><br /><br />
                          

                            Github Repo &nbsp;&nbsp; : <Terminalbtn content="Github" link={props.gitlink}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default PCard;