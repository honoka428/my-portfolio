import React from 'react';
import '../App.css';
import './MyWork.css';
import {Link} from 'react-router-dom';

const MyWork = () =>
    <div id='myWork' className="projectWrapper"> 
        <Link exact="true" to="/" className="project" style={{textDecoration: 'none', color: 'black'}}>
            <h1 className="projectName">Project 1 </h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate placerat dapibus. Maecenas at justo sed mauris vehicula faucibus ut vitae odio.</p>
        </Link>
        <Link to="curiaWebsite" className="project" style={{textDecoration: 'none', color: 'black'}}>
            <h1 className="projectName">Curia </h1>
            <p> A website redesign for an upcoming launch.</p>
        </Link>       
        <Link to="/" className="project" style={{textDecoration: 'none', color: 'black'}}>
            <h1 className="projectName"> Project 3 </h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate placerat dapibus. Maecenas at justo sed mauris vehicula faucibus ut vitae odio.</p>
        </Link>     
    </div>

export default MyWork