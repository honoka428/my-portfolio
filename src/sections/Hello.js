import React from 'react'
import Lottie from 'react-lottie'
import matchaAnimation from '../lottie/matcha.json'
import scrollDownAnimation from '../lottie/scrollDown.json'
import TextLoop from "react-text-loop";
import './Hello.css'

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
        <div id="hello-body">
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
            <div id="lottie-scroll-animation">
                <Lottie
                    options={scrollDownOptions}
                    height={100}
                    width={200}
                />
            </div>
        </div>
    )
}

const Hello = () =>
    <section className="section" id="hello" >
        <Body/>
    </section>


export default Hello