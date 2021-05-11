import React from 'react'
import Project from '../components/Project'
import electrumCover from '../images/electrumCover.png'
import electrumPopup from '../images/electrumPopup.png'

const Electrum = () => {
    return (
        <section className="section" id="projectElectrum">
            <Project
                name="Electrum"
                description="A lightweight wallet to securely store bitcoins (open source)."
                tagText={['DESIGN', 'DEV', 'WEBSITE']}
                img={electrumCover}
                img2={electrumPopup}
                tools="ES6, HTML, CSS"
                timeline="1-2 weeks"
                company="Small"
                type="Open Source"
                link="https://github.com/spesmilo/electrum-web/pull/8"            
            />                
        </section>
    )
}

export default Electrum