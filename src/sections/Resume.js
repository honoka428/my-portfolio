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
                height={500}
                width={500}
                style={{ position: 'relative'}}
            />
            <button style={{position: 'absolute', marginTop: '8em', width: '148px', height: '33px', border: 'none', color: 'white', background: '#83AFC8', borderRadius: '30px'}}>Resume</button>
        </div>
    )
}

export default Resume