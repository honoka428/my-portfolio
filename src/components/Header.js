import React, { useState }from 'react'
import logo from '../images/logo.svg'
// import hamburger from '../images/hamburger.svg'
import { Link, animateScroll as scroll} from 'react-scroll'

const scrollToTop = () => { scroll.scrollToTop()}

const Header = () => {

    // const [isMenuOpen, setState] = useState(false);
    
    // const toggleMenu = () => {
    //     setState({ isMenuOpen: !isMenuOpen})
    // }
    
    return(
        <div>
            <img src={logo} className="headerLogo" alt="site logo" onClick={() => {scrollToTop()}}/>
            <div id="nav">
                <Link id="navButton" className="myWorkButton" to="myWork" spy={true} smooth={"true"} offset={0} duration= {500}>
                    My work 
                </Link>
                <Link id="navButton" className="workHistoryButton" to="workHistory" spy={true} smooth={"true"} offset={0} duration= {500}>
                    Work history 
                </Link>
                <Link id="navButton" className="contactButton" to="contact" spy={true} smooth={"true"} offset={0} duration= {500}>
                    Contact
                </Link>
                <a href="files/HWatanabe_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color: "white"}} id="navButton" className="resumeButton">
                    My resume
                </a>
            </div>
            {/* <img src={hamburger} id="hamburger" alt="hamburger menu" style={{cursor:'pointer'}} onClick={() => toggleMenu()}/>
            <div className={`nav ${isMenuOpen ? 'show' : ''}`}>
                <Link>test1</Link>
                <Link>test2</Link>
                <Link>test3</Link>
            </div> */}

        </div>
    )
}
export default Header