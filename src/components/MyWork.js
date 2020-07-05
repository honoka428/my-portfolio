import React from 'react';
import '../App.css';
import './MyWork.css';
import {Link} from 'react-router-dom';
import Curia from '../images/curiaThumbnail.svg';

const MyWork = () =>
    <div id='myWork' className="projectWrapper"> 
        <div>
            <Link to="curiaWebsite" className="project">
                <img src={Curia} alt="curia thumbnail" className="curiaThumbnail"/>
            </Link>   
        </div>
        <div className="projectDescription">
            <a className="projectTitle" href="https://curia.app" target="_blank" rel="noopener noreferrer"> Curia </a>
            <h2 className="projectSubtitle">Website redesign for <br/>product launch.</h2>
            <h3 className="projectRole">UX/UI Design</h3>
            <Link to="curiaWebsite" className="readCS">
                Read the case study
            </Link>             
        </div>       
        </div>

export default MyWork