import React from 'react'
import qualcatLogo from '../images/qualcat.svg'

const Qualcat = () => 
 <div>
     <img src={qualcatLogo} className="qualcatLogo" alt="qualcat logo" />
    <h1 id="header" className="qualcatHeader"> Qualcat </h1>
    <p id="description" className="qualCat"> An audio transcription tool for researchers to conduct interview analysis. </p>
 </div>

export default Qualcat