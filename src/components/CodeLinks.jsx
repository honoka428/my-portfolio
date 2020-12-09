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
        padding: 0,
        cursor: 'pointer',
        listStyleType: 'none'
    }

    return(
        <ul style={styles}>
            <li>
                <div className="display-on-hover">Site Source Code</div>
                <Code id="icon"/>
            </li>
            <li>
                <div className="display-on-hover">Dribbble</div>
                <Dribbble id="icon"/>
            </li>
        </ul>
    )
}

export default CodeLinks