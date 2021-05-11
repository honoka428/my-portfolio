import React from 'react'
import Project from '../components/Project'
import qualcatCover from '../images/qualcatCover.png'
import qualcatPopup from '../images/qualcatPopup.png'

const Qualcat = () => {
    return (
        <section className="section" id="projectQualcat">
            <Project
                name="Qualcat"
                description="A startup that offers researchers qualitative analyses of audio transcription to optimize their workflow."
                tagText={['DESIGN', 'DASHBOARD']}
                img={qualcatCover}
                img2={qualcatPopup}
                tools="Figma"
                timeline="2-3 weeks"
                company="Small"
                type="Freelance"
            />                     
        </section>
    )
}

export default Qualcat