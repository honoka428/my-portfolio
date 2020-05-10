import React from 'react'
import qualcatLogo from '../images/qualcat.svg'
import Tag from './Tag'
import qualcatTools from '../images/qualcatTools.svg'

const Qualcat = () => 
 <div>
    <img src={qualcatLogo} className="qualcatLogo" alt="qualcat logo" />
    <h1 id="header" className="qualcatHeader"> Qualcat </h1>
    <p id="description" className="qualcatDescription"> An audio transcription tool for researchers to conduct interview analysis. </p>
    <Tag name={"Logo Design"} tag={"designTagQualcat"} link={"https://www.figma.com/proto/JxtsLgf467TBzQ63NlnwV7/qualcat-logo?node-id=0%3A2&scaling=scale-down"}/>
    <Tag name={"Backend Development"} tag={"devTagQualcat"} />
    <img src={qualcatTools} className="qualcatTools" alt="tools used for qualcat" id="tools"/>
 </div>

export default Qualcat
