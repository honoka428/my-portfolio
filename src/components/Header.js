import React from 'react'
import {Link} from 'react-scroll'

const Header = () => {
    
    return(
        <div>
            <div id="nav">
                <Link id="navButton" className="contactButton" to="contact" activeClass="active" spy={true} smooth={true}>
                    Contact
                </Link>
                <a id="navButton" className="resumeButton" href="files/HWatanabe_Resume.pdf" target="_blank" rel="noopener noreferrer"style={{textDecoration:"none"}}>
                    Resume
                </a>

            </div>
        </div>
    )
}
export default Header