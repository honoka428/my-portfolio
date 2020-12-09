import React from 'react'
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import _ from "lodash/fp";
import Notification from '../components/Notification'

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

        alert(contactInfo)
    }

    return (
        <div className="section" id="contact">
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
                    style={{width: '148px', height: '33px', border: 'none', color: 'white', background: '#83AFC8', borderRadius: '30px'}}
                />
            </form>
        </div>
    )
}

export default Contact