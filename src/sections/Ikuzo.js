import React from 'react'
import Project from '../components/Project'
import ikuzoCover from '../images/ikuzoCover.svg'
import { FiFigma } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';

const Curia = () => {
    return (
        <section className="section" id="projectCuria">
            <Project
                name="Ikuzo"
                description="
                    A map editor dashboard made specially for travel photographers
                    and other content creators who have more than 1K locations to 
                    keep track of.
                "
                tagText={['DESIGN', 'DEVELOPMENT']}
                img={ikuzoCover}
                tools={[<FiFigma/>, <FaReact/>]}
                type="Freelance"
                link="https://ikuzo.app"
            />                   
        </section>
    )
}

export default Curia