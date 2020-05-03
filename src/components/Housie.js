import React from 'react'
import housieLogo from '../images/housieLogo.svg'
import Tag from './Tag'
import housie from '../images/housie.svg'
import housieTools from '../images/housieTools.svg'

const Housie = () => 
 <div>
    <img src={housieLogo} alt="housie logo" className="housieLogo" />
    <h1 id="header" className="housieHeader"> Housie </h1>
    <p id="description" className="housieDescription"> A family management tool for busy parents. </p>
    <Tag name={"iOS Development"} tag={"iosTag"}/>
    <Tag name={"Logo Design"} tag={"designTagHousie"}/>
    <Tag name={"UX/UI"} tag={"uxuiTag"}/>
    <img src={housieTools} alt="tools used to create housie" id="tools" className="housieTools"/>
    <img src={housie} alt="housie app screenshots" className="housieApp"/>
 </div>

export default Housie