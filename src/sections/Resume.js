import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../lottie/resume.json';
import './Resume.css'
import { FiDownload } from 'react-icons/fi'

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
                    width={400}
                />
            </div>
            <a id="resume_btn" href="/files/Honoka_Resume.pdf" target="_blank"> <FiDownload/> <span style={{color: 'white', marginLeft: 10}} >Resume</span></a>
        </section>
    )
}

export default Resume