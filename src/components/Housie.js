import React from 'react'
import housieLogo from '../images/housie.svg'

const Housie = () => 
 <div>
    <img src={housieLogo} alt="housie logo" className="housieLogo" />
    <h1 id="header" className="housieHeader"> Housie </h1>
    <p id="description" className="housieDescription"> A family management tool for busy parents. </p>
 </div>

export default Housie