import React from 'react'

const Project = (props) => {
    return (
        <div style={{minHeight: '100vh', display: 'grid', gridTemplateColumns: '3fr 3fr', alignItems: 'center'}}>
            
            <div style={{textAlign: 'left', paddingLeft: '20em'}}>
                <h1 style={{fontWeight: '700', color: '#21273C', fontSize: '3em', margin: '0'}}>{props.name}</h1>
                <p style={{ fontWeight: '300', color: '#21273C', paddingTop: '0', width: '23vw'}}>{props.description}</p>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 3fr'}}>
                    { props.tagText.map( 
                        tag =>
                            <div style={{ background: 'rgba(196, 196, 196, 0.19)', border: '2px solid #A7A8AC', boxSizing: 'border-box', borderRadius: '3px', width: '5vw', fontWeight: '700', fontSize: '0.7em', textAlign: 'center', color: '#A7A8AC', lineHeight: '2em'}}>{tag}</div>
                    )}
                </div>
            </div>
            
            <img src={props.img} style={{width: '400px'}} alt="Project cover"/>

        </div>
    )
}

export default Project
