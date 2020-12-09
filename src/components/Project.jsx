import React from 'react'

const Project = (props) => {
    return (
        <div style={{minHeight: '100vh', display: 'grid', gridTemplateColumns: '4fr 3fr 2fr', alignItems: 'center'}}>
            
            <div style={{textAlign: 'left', paddingLeft: '15em'}}>
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <div>{props.tagText}</div>
            </div>
            
            <img src={props.img} style={{width: '400px'}}/>

            <div>project nav circles go here</div>

        </div>
    )
}

export default Project