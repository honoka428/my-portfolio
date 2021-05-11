import React from 'react'
import { elastic as Hamburger } from 'react-burger-menu'
import './Navigation.css'

const Navigation = () => {

    return(
        <div>
            <nav className="left">
                <Hamburger id="nav_links">
                        <li><a href="/" className="active"> Hello</a></li>
                        <li><a href="#projects" className="active">Projects</a></li>
                        <li><a href="#resume" className="active">Resume</a></li>
                        <li><a href="#contact"  className="active">Contact</a></li>
                </Hamburger>
            </nav>
        </div>
    )
}

export default Navigation