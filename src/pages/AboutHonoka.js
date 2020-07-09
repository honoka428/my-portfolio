import React from 'react';
import { Helmet } from 'react-helmet';
import Profile from '../images/profilePic.svg';
import './AboutHonoka.css';
import {Link} from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io';

const About = () => 
    <div>
        <Helmet>
            <title>About Honoka</title>
        </Helmet>
        <Link exact="true" to="/" className="HomeLink"> <IoIosArrowBack/> Back </Link>
        <div className="AboutWrapper">
            <img src={Profile} alt="honoka" className="ProfilePic"/>
            <div className="AboutText">
                <h1 className="Greeting">Hi there. </h1>
                <p>I’m a self-taught UX/UI Designer and Web Developer from Japan. I mainly have experience working in the healthcare and education sector. </p>
                <p>Currently working as a UX/UI Designer for <b> <a href="https://curia.app" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color:'#361671'}}>Curia</a></b>.</p>
                <div className="LinkWrapper">
                    <a href="https://www.linkedin.com/in/honokawatanabe" target="_blank" rel="noopener noreferrer" className="SocalLinks">LinkedIn</a>
                    <a href="https://www.dribbble.com/honokawatanabe" target="_blank" rel="noopener noreferrer" className="SocalLinks">Dribbble</a>
                    <a href="mailto:watanabehonoka428@gmail.com" className="SocalLinks">Email</a>                
                </div>

            </div> 
        </div>
    </div>

export default About;