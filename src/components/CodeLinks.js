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
                <Code id="icon"/>
            </a>
            <a href="https://www.linkedin.com/in/honokawatanabe/" target="_blank" rel="noopener noreferrer">
                <Linkedin id="icon"/>
            </a>            
        </ul>
    )
}

export default CodeLinks