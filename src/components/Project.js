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
                { props.link &&
                    <a id="website-link-btn" href={props.link} rel="noopener noreferrer" target="_blank">Visit Site</a>
                }

            </div>
            <img src={props.img} alt="Project cover"/>
        </div>
    )
}

export default Project
