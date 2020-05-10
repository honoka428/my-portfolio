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
      <Tag name={"iOS Development"} tag={"iosTag"} link={"https://github.com/honoka428/housie"}/>
      <Tag name={"Logo Design"} tag={"designTagHousie"} link={"https://www.figma.com/proto/bJUt5MsKCx2jgF5UUebtNf/housie_logo?node-id=0%3A2&scaling=scale-down"}/>
      <Tag name={"UX/UI"} tag={"uxuiTag"} link={"https://www.figma.com/proto/ECwUawNsjsJL6qCkDP4ZlI/Housie?node-id=102%3A749&scaling=scale-down"}/>
      <img src={housieTools} alt="tools used to create housie" id="tools" className="housieTools"/>
      <a href="https://www.figma.com/proto/ECwUawNsjsJL6qCkDP4ZlI/Housie?node-id=37%3A0&scaling=scale-down" alt="housie prototype" target="_blank" rel="noopener noreferrer">
         <img src={housie} alt="housie app screenshots" className="housieApp"/>
      </a>
   </div>

export default Housie