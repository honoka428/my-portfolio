import React from 'react'
import Project from '../components/Project'
import qualcatCover from '../images/qualcatCover.svg'
import { FiFigma } from 'react-icons/fi';

const Qualcat = () => {
    return (
        <section className="section" id="projectQualcat">
            <Project
                name="Qualcat"
                description="
                    A dashboard that offers researchers qualitative analyses of audio
                    transcriptions to optimize their workflow."
                tagText={['DESIGN']}
                img={qualcatCover}
                tools={[<FiFigma/>]}
                type="Freelance"
            />                     
        </section>
    )
}

export default Qualcat