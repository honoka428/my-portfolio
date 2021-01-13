import React from 'react'
import Project from '../components/Project'
import syndAICover from '../images/syndAICover.png'
import syndAIPopup from '../images/syndAIPopup.png'

const SyndAI = () => {
    return (
        <section className="section" id="projectSyndAI">
            <Project
                name="Synd.AI"
                description="A startup that uses an AI algorithm to rapidly gather insights from big data."
                tagText={['DESIGN', 'DEV']}
                img={syndAICover}
                img2={syndAIPopup}
                tools="Figma, React, AWS"
                timeline="2-3 weeks"
                company="Small"
                type="Freelance"                
                link="https://synd.ai"                
            />               
        </section>
    )
}

export default SyndAI