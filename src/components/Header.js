import React from 'react'
import logo from '../images/logo.svg'
import {animateScroll as scroll} from 'react-scroll'

const scrollToTop = () => { scroll.scrollToTop()}

const scrollToX = x => {scroll.scrollTo(x)}

const Header = () => {
    
    return(
        <div>
            <img src={logo} className="headerLogo" alt="site logo" onClick={() => {scrollToTop()}}/>
            <div id="nav">
                <div onClick={() => {scrollToX(850)}} id="navButton" className="myWorkButton" style={{textDecoration:"none", color: "white"}}>
                    My work 
                </div>
                <div onClick={() => {scrollToX(2450)}} id="navButton" className="workHistoryButton" style={{textDecoration:"none", color: "white"}}>
                    Work history 
                </div>
                <div onClick={() => {scrollToX(3200)}} id="navButton" className="contactButton" style={{textDecoration:"none", color: "white"}}>
                    Contact
                </div>
                <a href="files/HWatanabe_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color: "white"}} id="navButton" className="resumeButton">
                    My resume
                </a>
            </div>
        </div>
    )
}
export default Header