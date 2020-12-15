import React from 'react'
import './Project.css'
import Popup from 'reactjs-popup';

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

            <Popup
                trigger={<img src={props.img} alt="Project cover"/>}
                modal
                nested
            >
                {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                    &times;
                    </button>
                    <div className="content">
                        <div id="content-info">
                            <div >
                                <h2>Tools Used</h2>
                                <p>{props.tools}</p>
                            </div>
                            <div>
                                <h2>Timeline</h2>
                                <p>{props.timeline}</p>
                            </div>
                            <div>
                                <h2>Company</h2>
                                <p>{props.company}</p>
                            </div>
                            <div>
                                <h2>Type</h2>
                                <p>{props.type}</p>
                            </div>            
                            <div>
                                <h2>See More</h2>
                                <a href={props.link} target="_blank" rel="noopener noreferrer"><p>{props.link}</p></a>
                            </div>                                                                                                                
                        </div>
                        <img src={props.img} alt="Project popup"/>
                    </div>          
                </div>
                )}
            </Popup>
        </div>
    )
}

export default Project
