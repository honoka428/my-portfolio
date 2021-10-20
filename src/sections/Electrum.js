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
                description="
                    A website to showcase the features of an
                    open source lightweight Bitcoin wallet.
                    A PR is created for this project and still under review.
                "
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