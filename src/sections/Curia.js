import React from 'react'
import Project from '../components/Project'
import curiaCover from '../images/curiaCover.svg'
import { FiFigma } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';

const Curia = () => {
    return (
        <section className="section" id="projectCuria">
            <Project
                name="Ikuzo"
                description="A map editor for travellers and photographers."
                tagText={['DESIGN', 'DEVELOPMENT']}
                img={curiaCover}
                tools={[<FiFigma/>, <FaReact/>]}
                type="Freelance"
                link="https://ikuzo.app"
            />                   
        </section>
    )
}

export default Curia