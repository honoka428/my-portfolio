import React from 'react'
import ScrollspyNav from "react-scrollspy-nav";
import '../App.css'

const Navigation = () => {

    return(       
        <ScrollspyNav
            // scrollTargetIds={["hello", "projects", "resume", "contact"]}
            // Specifying section id here raises err (element returns null) *** to be fixed
            scrollTargetIds={["section_0", "section_1", "section_2", "section_3"]}
            offset={210}
            activeNavClass="is-active"
            scrollDuration="1000"
            headerBackground="true"
        >
            <ul className="mainNavStyles">
                <li><a href="/" className="active"> Hello</a></li>
                <li><a href="#projects" className="active">Projects</a></li>
                <li><a href="#resume" className="active">Resume</a></li>
                <li><a href="#contact"  className="active">Contact</a></li>
            </ul>
        </ScrollspyNav>        
    )
}

export default Navigation