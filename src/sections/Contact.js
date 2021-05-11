import React from 'react'
import './Contact.css'
import qrTelegram from '../images/qrTelegram.png'

const Contact = () => {

    return (
        <section className="section" id="contact">
            <h1>Want to see more?</h1>
            <div>
                <p className="contactSubtext"> Find me on Telegram at <br/> <a href="https://t.me/honokawatanabe">@honokawatanabe</a></p>
                <img className="qrCode" src={qrTelegram} alt="link to open chat with me"/>
                <p className="contactSubtext" id="emailOptionText"> Or email me at <a href="mailto:watanabehonoka428@gmail.com">watanabehonoka428@gmail.com</a></p>

            </div>
        </section>
    )
}

export default Contact