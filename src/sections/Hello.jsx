import React from 'react'
import Navigation from '../components/Navigation'
import CodeLinks from '../components/CodeLinks'
import Lottie from 'react-lottie'
import matchaAnimation from '../lottie/matcha.json'
import scrollDownAnimation from '../lottie/scrollDown.json'
import { useState } from 'react'

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

const Body = ({message}) =>
    <div style={{textAlign: 'center', paddingTop: '20%'}}>
        <p>{message}</p>
        <Lottie 
            options={matchaOptions}
            height={100}
            width={100}
        />
        <Lottie
            options={scrollDownOptions}
            height={100}
            width={200}
            style={{paddingTop: '14em'}}
        />
    </div>

const Hello = () => {
    const [text, setText] = useState('')
    const messages = ['Hi', 'Im Honoka', 'From Japan', 'Web Designer & Developer']
    var counter = 0

    setTimeout(() => {
        var messageToDisplay = messages[counter]
        setText(messageToDisplay)
        counter === 3 ? counter = 1 : counter += 1

    }, 2000)

    return (
        <div className="section">
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'fixed', width: '100vw'}}>
                <Navigation/>
                <CodeLinks/>
            </div>
            <Body message={text}/>
        </div>
    )
}

export default Hello