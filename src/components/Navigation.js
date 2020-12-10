import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const mainNavStyles = {
    display: 'grid',
    templateGridRow: '1fr 1fr 1fr 1fr',
    height: '20vh',
    paddingLeft: 40,
    cursor: 'pointer',
    fontWeight: '800'
}

const Navigation = () => {
    const [active, setActive] = useState('HELLO')

    const helloStyle = active === 'HELLO' ? { color: '#848484' } : {}
    const projectStyle = active === 'PROJECTS' ? { color: '#848484' } : {}
    const resumeStyle = active === 'RESUME' ? { color: '#848484' } : {}
    const contactStyle = active === 'CONTACT' ? { color: '#848484' } : {}

    const handleClick = (e) => {
        var clicked = e.target.innerText
        console.log('clicked: ', clicked)
        setActive(clicked)
    }

    return(
        <ul style={mainNavStyles}>
            <AnchorLink href="#hello" onClick={(e) => handleClick(e)} style={helloStyle}>HELLO</AnchorLink>
            <AnchorLink href="#projects" onClick={(e) => handleClick(e)} style={projectStyle}>PROJECTS</AnchorLink>
            <AnchorLink href="#resume" onClick={(e) => handleClick(e)} style={resumeStyle}>RESUME</AnchorLink>
            <AnchorLink href="#contact" onClick={(e) => handleClick(e)} style={contactStyle}>CONTACT</AnchorLink>
        </ul>
    )
}

export default Navigation