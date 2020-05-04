import React from 'react'
import '../App.css'
import './Contact.css'
import pattern from '../images/pattern.svg'
import linkedIn from '../images/linkedIn.svg'
import github from '../images/github.svg'
import portrait from '../images/portrait.svg'

const Contact = () =>
    <div className='contact-section' id="contact"> 
        <img src={pattern} alt="background pattern shapes" className="pattern"/>
        <img src={portrait} className="portrait" alt="honoka" />
        <h1 id="header" className="contactHeader">Contact</h1>
        <p id="contactDescription" className="description1">Interested in working together?</p>
        <p id="contactDescription" className="description2">I’m currently available for freelance work and full time positions.</p>
        <button className="hireMeButton"> Hire Me </button>
        <img src={linkedIn} className="linkedInLogo" alt="linkedIn logo" />
        <img src={github} className="githubLogo" alt="github logo" />
    
    </div>

export default Contact