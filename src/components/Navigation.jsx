import React from 'react'

const Navigation = () => {
    const styles = {
        display: 'grid',
        templateGridRow: '1fr 1fr 1fr 1fr',
        height: '20vh',
        padding: '0',
        cursor: 'pointer',
    }

    return(
        <ul style={styles}>
            <a >HELLO</a>
            <a>PROJECT</a>
            <a>RESUME</a>
            <a>CONTACT</a>
        </ul>
    )
}

export default Navigation