import React from 'react'
import '../App.css'
import './Contact.css'
import pattern from '../images/pattern.svg'
import linkedIn from '../images/linkedIn.svg'
import github from '../images/github.svg'
import portrait from '../images/portrait.svg'

const Logo = ({link, source, name, alt}) =>
    <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={source} className={name} alt={alt} />
    </a>

const Button = ({link, name, text}) =>
    <a href={link} target="_blank" rel="noopener noreferrer">
        <button className={name}> {text} </button>
    </a>

const Contact = () =>
    <div id='contact'> 
        <img src={pattern} alt="background pattern shapes" id="pattern"/>
        <img src={portrait} className="portrait" alt="honoka" />
        <h1 id="header" className="contactHeader">Contact</h1>
        <p id="contactDescription" className="description1">Interested in working together?</p>
        <p id="contactDescription" className="description2">I’m currently available for freelance work and full time positions.</p>
        <Button link={"mailto: watanabehonoka428@gmail.com"} name={"hireMeButton"} text={"Hire Me"}/>
        <Logo link={"https://linkedin.com/in/honokawatanabe"} source={linkedIn} name={"linkedInLogo"} alt={"linkedIn logo"}/>
        <Logo link={"https://github.com/honoka428"} source={github} name={"githubLogo"} alt={"github logo"}/>
    </div>

export default Contact