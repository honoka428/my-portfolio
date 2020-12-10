import React from 'react'
import './Project.css'

const Project = (props) => {
    return (
        <div className="project" >
            <div id="project-text">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <div id="project-tags">
                    { props.tagText.map( 
                        tag =>
                            <div id="tag">{tag}</div>
                    )}
                </div>
            </div>
            
            <img src={props.img} alt="Project cover"/>

        </div>
    )
}

export default Project
