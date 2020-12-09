import React from 'react'
import Project from '../components/Project'
import curiaCover from '../images/curiaCover.png'
import syndAICover from '../images/syndAICover.png'
import electrumCover from '../images/electrumCover.png'
import qualcatCover from '../images/qualcatCover.png'

const Projects = () => {
    return (
        <div className="section" id="projects">
            <Project
                name="Curia"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                tagText="DESIGN"
                img={curiaCover}
            />
            <Project
                name="Synd.AI"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                tagText="DESIGN, DEV"
                img={syndAICover}
            />
            <Project
                name="Electrum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                tagText="DESIGN, DEV"
                img={electrumCover}
            />
            <Project
                name="Qualcat"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                tagText="DESIGN"
                img={qualcatCover}
            />                     
        </div>
    )
}

export default Projects