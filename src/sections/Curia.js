import React from 'react'
import Project from '../components/Project'
import curiaCover from '../images/curiaCover.png'

const Curia = () => {
    return (
        <section className="section" id="projectCuria">
            <Project
                name="Curia"
                description="A health tech company that offers an app for cancer patients to easily access treatment, clinical trial and physician information for their type of cancer."
                tagText={['DESIGN']}
                img={curiaCover}
                tools="Sketch, Invision"
                timeline="2-3 weeks"
                company="Medium"
                type="Full-time"
                link="https://curia.app"
            />                   
        </section>
    )
}

export default Curia