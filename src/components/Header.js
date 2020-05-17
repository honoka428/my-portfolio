import React from 'react'
import logo from '../images/logo.svg'
import {Link, animateScroll as scroll} from 'react-scroll'

const scrollToTop = () => { scroll.scrollToTop() }

const Header = () => {
    
    return(
        <div>
            <img src={logo} className="headerLogo" alt="site logo" onClick={() => {scrollToTop()}}/>
            <div id="nav">
                <Link id="navButton" className="myWorkButton" to="myWork" activeClass="active" spy={true} smooth={true}>
                    My work 
                </Link>
                <Link id="navButton" className="workHistoryButton" to="workHistory" activeClass="active" spy={true} smooth={true}>
                    Work history 
                </Link>
                <Link id="navButton" className="contactButton" to="contact" activeClass="active" spy={true} smooth={true}>
                    Contact
                </Link>
                <a href="files/HWatanabe_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color: "white"}} id="navButton" className="resumeButton">
                    My resume
                </a>
            </div>
        </div>
    )
}
export default Header