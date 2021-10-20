import React from 'react'
import Project from '../components/Project'
import curiaCover from '../images/curiaCover.svg'
import { FiFigma } from 'react-icons/fi';

const Curia = () => {
    return (
        <section className="section" id="projectSyndAI">
            <Project
                name="Curia"
                description="
                    A mobile app to provide cancer patients with information 
                    about treatments, clinical trials, and physicians. Available
                    in app stores in Germany, Italy, Spain, and India.
                "
                tagText={['DESIGN']}
                img={curiaCover}
                tools={[<FiFigma/>]}
                type="Freelance"        
                link="https://apps.apple.com/in/app/curia/id1489153159"                
            />          
        </section>
    )
}

export default Curia