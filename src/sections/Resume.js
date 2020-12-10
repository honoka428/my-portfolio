import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../lottie/resume.json';
import './Resume.css'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
};

const Resume = () => {
    return (
        <section className="section" id="resume" style={{textAlign: 'center'}} >
            <div id="lottie-animation-resume">
                <Lottie 
                    options={defaultOptions}
                    height={300}
                    width={500}
                />
            </div>
            <button id="resume_btn"><a style={{color: 'white'}} href="/files/Honoka_Resume.pdf" target="_blank">Resume</a></button>
        </section>
    )
}

export default Resume