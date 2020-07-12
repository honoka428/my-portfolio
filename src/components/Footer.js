import React from 'react'
import '../App.css'
import './Footer.css'
import {FiHeart} from 'react-icons/fi';
import {Link as ScrollLink} from 'react-scroll'
import {Link} from 'react-router-dom';


const Footer = () =>
    <div id='footer' className="footerWrapper"> 
        <div id="footerNav">
            <ScrollLink className="footerItem" to="contact" activeClass="active" spy={true} smooth={true}>
                Contact
            </ScrollLink>
            <Link className="footerItem" to="aboutHonoka" >
                About
            </Link>                 
            <a className="footerItem" href="files/HWatanabe_Resume.pdf" target="_blank" rel="noopener noreferrer"style={{textDecoration:"none"}}>
                Resume
            </a>
        </div>            

        <div>
            <p id="madefrom">Made from scratch<FiHeart/> </p>
            <p id="copyright"> Copyright © 2020 Honoka Watanabe </p>    
        </div>
    
    </div>

export default Footer