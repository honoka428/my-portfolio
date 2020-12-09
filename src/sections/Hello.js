import React from 'react'
import Navigation from '../components/Navigation'
import CodeLinks from '../components/CodeLinks'
import Lottie from 'react-lottie'
import matchaAnimation from '../lottie/matcha.json'
import scrollDownAnimation from '../lottie/scrollDown.json'
import { useState } from 'react'
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
        <TextLoop interval={2500} mask={true}>
            <span>Hi</span>
            <span>I'm Honoka</span>
            <span>From Japan</span>
            <span>Web Designer & Developer</span>
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
            style={{paddingTop: '10em'}}
        />
    </div>
    )
}

const Hello = () =>
    <div className="section" id="hello">
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'fixed', width: '100vw'}}>
            <Navigation/>
            <CodeLinks/>
        </div>
        <Body/>
    </div>


export default Hello