import React from 'react';
import '../App.css';
import './MyWork.css';

const MyWork = () =>
    <div id='myWork' className="projectWrapper"> 
        <section className="project">
            <h1 class="projectName">Project 1 </h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate placerat dapibus. Maecenas at justo sed mauris vehicula faucibus ut vitae odio.</p>
        </section>
        <section className="project">
            <h1 class="projectName">Curia </h1>
            <p> A website redesign for an upcoming launch.</p>
        </section>       
        <section className="project">
            <h1 class="projectName"> Project 3 </h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate placerat dapibus. Maecenas at justo sed mauris vehicula faucibus ut vitae odio.</p>
        </section>         
    </div>

export default MyWork