import React from 'react'
import './Contact.css'
import { HiOutlineMail } from 'react-icons/hi';
import { FaTelegramPlane } from 'react-icons/fa'
const Contact = () => {

    return (
        <section className="section" id="contact">
            <h1>Interested in working together?</h1>
            <p>Send me a message and I'll get back to you within 48 hours.</p>
            <div id="actionBtnWrapper">
                <button className="actionBtn" href="https://t.me/honokawatanabe"><FaTelegramPlane/> <span>Telegram</span></button>
                <button className="actionBtn" href="mailto:watanabehonoka428@gmail.com"><HiOutlineMail/> <span>Email</span></button>
            </div>
        </section>
    )
}

export default Contact