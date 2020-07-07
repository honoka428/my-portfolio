import React from 'react'
import '../App.css'
import './Contact.css'
import linkedIn from '../images/linkedIn.svg'
import github from '../images/github.svg'
import dribbble from '../images/dribbble.svg'

const Logo = ({link, source, name, alt}) =>
    <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={source} className={name} alt={alt} />
    </a>

const Button = ({link, name, text}) =>
    <a href={link} target="_blank" rel="noopener noreferrer">
        <button className={name}> {text} </button>
    </a>

const Contact = () =>
    <div id='contact' className="contactWrapper"> 
        <h1 id="header" className="contactHeader">Contact</h1>
        <h2 className="contactDescription">Interested in working together?</h2>
        <Button link={"mailto: watanabehonoka428@gmail.com"} name={"hireMeButton"} text={"Hire Me"}/>
        <div>
            <Logo link={"https://linkedin.com/in/honokawatanabe"} source={linkedIn} name={"linkedInLogo"} alt={"linkedIn logo"}/>
            <Logo link={"https://github.com/honoka428"} source={github} name={"githubLogo"} alt={"github logo"}/>
            <Logo link={"https://dribbble.com/honokawatanabe"} source={dribbble} name={"dribbbleLogo"} alt={"dribbble logo"}/>
        </div>
    </div>

export default Contact