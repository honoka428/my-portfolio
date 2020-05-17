import React, {useState} from 'react';
import '../App.css';
import './WorkHistory.css'
import curiaTools from '../images/curiaTools.svg'
import locationIcon from '../images/locationIcon.svg'
import openRoomTools from '../images/openRoomTools.svg'
import workHistory from '../images/workHistory.svg'

const Company = ({name, role, location, tools, alt, refHeader, refRole, refTools, refIcon, refLocation }) => {
    
    const [isShown, setIsShown] = useState(false);

    return ( 
        <div id="workItem">
            <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}> 
                <h1 id="companyHeader" className={refHeader}>{name}</h1>
                <p id="companyRole" className={refRole}>{role}</p>
                <p id="location" className={refLocation}>{location}</p>
                <img src={locationIcon} alt="location icon" id="locationIcon" className={refIcon}/>
            </div>
            {isShown && (
                <img src={tools} alt={alt} className={refTools} id="tools"/> 
            )}
                
        </div>
    )
}

const WorkHistory = () => {
    return (
        <div id='workHistory'> 
            <h1 id="header" className="historyHeader">Work History</h1>
            <p className="historyDescription">A couple of the companies I used to work at.</p>
            <img src={workHistory} alt="work timeline" className="workHistoryLine" />
            <div id="dash" className="curiaDash" />
            <div id="dash" className="ORDash" />
            <Company name={"Curia"} role={"UX/UI Designer"} location={"Frankfurt, Germany"} tools={curiaTools} alt={"tools used at Curia"} refTools={"curiaTools"} refHeader={"curiaHeader"} refRole={"curiaRole"} refIcon={"curiaIcon"} refLocation={"curiaLocation"}/>
            <Company name={"Open Room"} role={"Software Engineer, intern"} location={"Tokyo, Japan"} tools={openRoomTools} alt={"tools used at OR"} refTools={"ORTools"} refHeader={"ORHeader"} refRole={"ORRole"} refIcon={"ORIcon"} refLocation={"ORLocation"}/>
        </div>
    )
}

export default WorkHistory