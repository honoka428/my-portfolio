import React from 'react'
import Project from '../components/Project'
import electrumCover from '../images/electrumCover.png'

const Electrum = () => {
    return (
        <section className="section" id="projectElectrum">
            <Project
                name="Electrum"
                description="A lightweight wallet to securely store bitcoins (open source)."
                tagText={['DESIGN', 'DEV']}
                img={electrumCover}
                tools="ES6, HTML, CSS"
                timeline="1-2 weeks"
                company="Small"
                type="Open Source"
                link="shorturl.at/gyzN6"            
            />                
        </section>
    )
}

export default Electrum