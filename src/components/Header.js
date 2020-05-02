import React from 'react'
import logo from '../images/logo.svg';
import { Link, animateScroll as scroll} from 'react-scroll'

const scrollToTop = () => { scroll.scrollToTop()}

const Header = () =>
    <div>
        <img src={logo} className="headerLogo" alt="site logo" onClick={() => {scrollToTop()}}/>
        <Link className="myWorkButton" activeClass="active" to="myWork" spy={true} smooth={true} offset={0} duration= {500}>
            My work 
        </Link>
        <Link className="workHistoryButton" activeClass="active" to="workHistory" spy={true} smooth={true} offset={0} duration= {500}>
            Work history 
        </Link>
        <Link className="contactButton" activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration= {500}>
            Contact
        </Link>
        <Link className="resumeButton" activeClass="active" to="resume" spy={true} smooth={true} offset={0} duration= {500}>
            My resume
        </Link>
    </div>


export default Header