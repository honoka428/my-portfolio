import React from 'react'
import Project from '../components/Project'
import syndAICover from '../images/syndAICover.svg'
import { FiFigma } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa';

const SyndAI = () => {
    return (
        <section className="section" id="projectSyndAI">
            <Project
                name="Synd.AI"
                description="A website redesign for a startup that uses an AI algorithm to rapidly rather insights from big data."
                tagText={['DESIGN', 'DEVELOPMENT']}
                img={syndAICover}
                tools={[<FiFigma/>, <FaReact/>, <FaAws/>]}
                type="Freelance"        
                link="https://synd.ai"                
            />          
        </section>
    )
}

export default SyndAI