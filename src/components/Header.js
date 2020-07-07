import React from 'react'
import {Link as ScrollLink} from 'react-scroll'
import {Link} from 'react-router-dom';

const Header = () => {
    
    return(
        <div>
            <div id="nav">
                <ScrollLink id="navButton" className="contactButton" to="contact" activeClass="active" spy={true} smooth={true}>
                    Contact
                </ScrollLink>
                <Link id="navButton" to="aboutHonoka" className="aboutButton">
                    About
                </Link>                 
                <a id="navButton" className="resumeButton" href="files/HWatanabe_Resume.pdf" target="_blank" rel="noopener noreferrer"style={{textDecoration:"none"}}>
                    Resume
                </a>

            </div>
        </div>
    )
}
export default Header