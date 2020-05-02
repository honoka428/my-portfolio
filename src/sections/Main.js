import React from 'react'
import '../App.css';
import logo from '../logo.svg';
import Navbar from '../components/Navbar'
import Title from '../components/Title'

const Main = () =>
    <div className='main-section'> 
        <img src={logo} className="headerLogo"/>
        <Navbar /> 
        <Title />

    </div>

export default Main