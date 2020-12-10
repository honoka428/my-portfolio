import React from 'react'
import Lottie from 'react-lottie'
import matchaAnimation from '../lottie/matcha.json'
import scrollDownAnimation from '../lottie/scrollDown.json'
import TextLoop from "react-text-loop";

const matchaOptions = {
    loop: true,
    autoplay: true,
    animationData: matchaAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
};

const scrollDownOptions = {
    loop: true,
    autoplay: true,
    animationData: scrollDownAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
};

const Body = () => {

    return(
        <div style={{textAlign: 'center', paddingTop: '17%', fontSize: '1.5em'}}>
        <span>Hi, I'm </span> {" "}
        <TextLoop interval={2000} mask={true}>
            <span style={{fontWeight: '600', color: '#94C7E4'}}>Honoka</span>
            <span>from <span style={{fontWeight: '600', color: '#94C7E4'}}>Japan</span></span>
            <span>a <span style={{fontWeight: '600', color: '#94C7E4'}}>designer</span></span>
            <span>a <span style={{fontWeight: '600', color: '#94C7E4'}}>developer</span></span>
        </TextLoop>

        <Lottie 
            options={matchaOptions}
            height={150}
            width={150}
        />
        <Lottie
            options={scrollDownOptions}
            height={100}
            width={200}
            style={{paddingTop: '9em'}}
        />
    </div>
    )
}

const Hello = () =>
    <div className="section" id="hello">
        <Body/>
    </div>


export default Hello