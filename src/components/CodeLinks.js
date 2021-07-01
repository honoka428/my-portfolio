import React from 'react'
import { 
    Code,
    Linkedin
} from 'react-feather'
import './CodeLinks.css'

const CodeLinks = () => {

    return(
        <ul className="socialLinks" >
            <a href="https://github.com/honoka428/my-portfolio" target="_blank" rel="noopener noreferrer">
                <Code id="sourceCode" className="icon"/>
                <span className="hidden">Source Code</span>
            </a>
            <a href="https://www.linkedin.com/in/honokawatanabe/" target="_blank" rel="noopener noreferrer">
                <Linkedin id="linkedIn" className="icon"/>
                <span className="hidden">LinkedIn</span>
            </a>            
        </ul>
    )
}

export default CodeLinks