import React from 'react'
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import _ from "lodash/fp";
import Notification from '../components/Notification'
import './Contact.css'

var AWS = require('aws-sdk/dist/aws-sdk-react-native');

const Contact = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const [ errorMessage, setErrorMessage ] = useState('')
    const [ buttonValue, setButtonValue ] = useState('Send')

    useEffect(() => {
        setTimeout(() => {
            setErrorMessage('')
        }, 500)
    }, [setErrorMessage])


    const onSubmit = (data, e) => {
        setButtonValue('Sending...')

        var contactInfo = {
            "name": data.name,
            "email": data.email,
            "message": data.message
        }

        AWS.config.update({
            accessKeyId: process.env.REACT_APP_ACCESS_KEY,
            secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
            region: 'eu-central-1',
        });

        var lambda = new AWS.Lambda();

        var params = {
            FunctionName: 'testNodemailerFunction',
            Payload: JSON.stringify(contactInfo)
        };

        lambda.invoke(params, async(err, data) => {
            if (err) {
                console.log(err, err.stack, 'error')
                setErrorMessage('There was a problem submitting your message. Please try again later.')
            }
            else {
                console.log('Successfull!');
                await setErrorMessage('Thank you for your message.')
                e.target.reset()
                setButtonValue('SEND')
            }
        });
    }

    return (
        <section className="section" id="contact">
            <h1>Get In Touch</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-item">
                    <label>Name <span style={{color: '#1575B4'}}>*</span></label>
                    <input name="name" ref={register({ required: true})} />
                    {_.get("name.type", errors) === "required" && (
                        <p>This field is required.</p>
                    )}
                </div>
                
                <div className="form-item">
                    <label>Email <span style={{color: '#1575B4'}}>*</span></label>
                    <input name="email" ref={register({
                        required: true,
                        pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
                    })} />
                    {_.get("email.type", errors) === "required" && (
                        <p>This field is required.</p>
                    )}    
                    {_.get("email.type", errors) === "pattern" && (
                        <p>Please enter a valid email.</p>
                    )}                                
                </div>

                <div className="form-item">
                    <label>Message</label>
                    <textarea rows="7" cols="1" wrap="soft" name="message" ref={register} />
                </div>

                <Notification message={errorMessage}/>                   

                <input 
                    className="form-item"
                    type="submit"
                    value={buttonValue}
                    id="submit-btn"
                />
            </form>
        </section>
    )
}

export default Contact