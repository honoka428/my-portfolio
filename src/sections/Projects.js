import React from 'react'
import Project from '../components/Project'
import curiaCover from '../images/curiaCover.png'
import syndAICover from '../images/syndAICover.png'
import electrumCover from '../images/electrumCover.png'
import qualcatCover from '../images/qualcatCover.png'

const Projects = () => {
    return (
        <section className="section" id="projects">
            <Project
                name="Curia"
                description="A health tech company that offers an app for cancer patients to easily access treatment, clinical trial and physician information for their type of cancer."
                tagText={['DESIGN']}
                img={curiaCover}
            />
            <Project
                name="Synd.AI"
                description="A startup that uses an AI algorithm to rapidly gather insights from big data. Currently in progress."
                tagText={['DESIGN', 'DEV']}
                img={syndAICover}
            />
            <Project
                name="Electrum"
                description="A lightweight wallet to securely store bitcoins (open source)."
                tagText={['DESIGN', 'DEV']}
                img={electrumCover}
            />
            <Project
                name="Qualcat"
                description="A startup that offers researchers qualitative analyses of audio transcription to optimize their workflow."
                tagText={['DESIGN']}
                img={qualcatCover}
            />                     
        </section>
    )
}

export default Projects