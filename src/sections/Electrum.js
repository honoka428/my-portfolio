import React from 'react'
import Project from '../components/Project'
import electrumCover from '../images/electrumCover.svg'
import { FiFigma } from 'react-icons/fi';
import { SiJavascript } from 'react-icons/si';

const Electrum = () => {
    return (
        <section className="section" id="projectElectrum">
            <Project
                name="Electrum"
                description="A website redesign for an open source lightweight bitcoin wallet project (pull request not merged)."
                tagText={['DESIGN', 'DEVELOPMENT']}
                img={electrumCover}
                tools={[<FiFigma/>, <SiJavascript/>]}
                type="Open Source (non-merged)"
                link="https://github.com/spesmilo/electrum-web/pull/8"            
            />                
        </section>
    )
}

export default Electrum