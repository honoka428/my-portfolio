import React from 'react'
import { 
    Code,
    Dribbble
} from 'react-feather'

const CodeLinks = () => {
    const styles = {
        display: 'grid',
        templateGridRow: '1fr 1fr',
        height: '10vh',
        paddingRight: 60,
        cursor: 'pointer',
        listStyleType: 'none'
    }

    return(
        <ul style={styles} >
            <a href="https://github.com/honoka428/my-portfolio" target="_blank" rel="noopener noreferrer">
                <Code id="icon"/>
            </a>
            <a href="https://dribbble.com/honokawatanabe" target="_blank" rel="noopener noreferrer">
                <Dribbble id="icon"/>
            </a>
        </ul>
    )
}

export default CodeLinks