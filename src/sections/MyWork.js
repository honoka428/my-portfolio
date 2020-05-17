import React from 'react';
import '../App.css';
import './MyWork.css';
import Housie from '../components/Housie.js';
import Qualcat from '../components/Qualcat.js';
import Portfolio from '../components/Portfolio.js';

const MyWork = () =>
    <div id='myWork'> 
        <Housie />
        <Qualcat />
        <Portfolio />
    </div>

export default MyWork