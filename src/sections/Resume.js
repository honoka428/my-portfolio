import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../lottie/resume.json';

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
        <div id="resume" className="section" style={{display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <Lottie 
                options={defaultOptions}
                height={300}
                width={300}
            />
            <button style={{width: '148px', height: '33px', border: 'none', color: 'white', background: '#83AFC8', borderRadius: '30px'}}>Resume</button>
        </div>
    )
}

export default Resume