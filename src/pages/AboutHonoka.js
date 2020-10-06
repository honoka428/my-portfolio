import React from 'react';
import { Helmet } from 'react-helmet';
import Profile from '../images/profilePic.svg';
import './AboutHonoka.css';
import {Link} from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io';
import Footer from '../components/Footer.js';

const About = () => 
    <div>
        <Helmet>
            <title>About Honoka</title>
        </Helmet>
        <Link exact="true" to="/" className="HomeLinkAbout"> <IoIosArrowBack/> Back </Link>
        <div className="AboutWrapper">
            <img src={Profile} alt="honoka" className="ProfilePic"/>
            <div className="AboutText">
                <h1 className="Greeting">Hi there. </h1>
                <div className="AboutDescription">
                    <p>I’m a freelance UX/UI Designer and Web Developer from Japan. 
                        I specialize in the healthcare and education sector but have 
                        also worked with restaurant and SaaS clients.</p>
                </div>
                <div className="LinkWrapper">
                    <a href="https://www.linkedin.com/in/honokawatanabe" target="_blank" rel="noopener noreferrer" className="SocalLinks">LinkedIn</a>
                    <a href="https://www.dribbble.com/honokawatanabe" target="_blank" rel="noopener noreferrer" className="SocalLinks">Dribbble</a>
                    <a href="mailto:watanabehonoka428@gmail.com" className="SocalLinks">Email</a>                
                </div>
            </div> 
        </div>
        <Footer />
    </div>

export default About;