import React from 'react'
import './Navigation.css'
import CodeLinks from './CodeLinks';

const Navigation = () => {

    return(
        <div className="nav-wrapper">
            <nav className="links">
                <li><a href="/" className="active"> Hello</a></li>
                <li><a href="#projectSyndAI" className="active">Projects</a></li>
                <li><a href="#resume" className="active">Resume</a></li>
                <li><a href="#contact"  className="active">Contact</a></li>
            </nav>

            <CodeLinks/>
        </div>
    )
}

export default Navigation