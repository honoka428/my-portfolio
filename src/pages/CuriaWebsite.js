import React from 'react';
import './CaseStudy.css';
import InfoArchitecture from '../images/flowchart.svg';
import UI from '../images/curiaSiteUI.svg';
import Logo from '../images/curiaLogo.svg'
import {Link} from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io'
import {FiExternalLink} from 'react-icons/fi';

const curiaWebsite = () => 
    <div className="CSWrapper">
        <Link exact="true" to="/" className="HomeLink"> <IoIosArrowBack/> Back </Link>
        <h1 className="MainTitle"> <b>Curia’s website redesign</b> <br/>for upcoming app launch. </h1>
        <a href="https://curia.app" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#361671"}}> curia.app <FiExternalLink/> </a>
        <img src={Logo} alt="curia logo" className="Logo"/>
        <div className="CSItem">
            <h2 className="Subtitle"> Introduction</h2>
            <div className="Description" >
                <p>Curia is a <b style={{color: '#361671'}}>health tech</b> company that helps cancer patients find information on treatments, clinical trials and experts. The pre-launch website included an overview of the product, a couple of blog posts, and a contact form.</p>           
            </div>        
        </div>

        <div className="CSItem">
            <h2 className="Subtitle">Business Goal</h2>
            <p className="Description">To get more users to download the app upon product launch. <br/> <br/> Therefore the high level goals of this project were to:</p>
            <ul>
                <li><b>1.</b> Illustrate how the app <b style={{color: '#361671'}}>benefits cancer patients</b></li>
                <li><b>2.</b> Convey the <b style={{color: '#361671'}}>trustworthiness of the company</b></li>
                <li><b>3.</b> Increase traffic to the company's <b style={{color: '#361671'}}>social media channels</b></li>
            </ul> 
        </div>

        <div className="CSItem">
            <h2 className="Subtitle" >Users and Audience </h2>
            <div className="Description">
                <p> <b style={{color: '#361671'}}> Cancer patients and caretakers</b> <br/> The company’s target audience for the mobile app.</p>
                <p> <b style={{color: '#361671'}}> Clinical trial coordinators</b> <br/> Curia also offers a dashboard to help coordinators recruit more patients for their clinical trial. This product is also featured on the website.</p>
            </div>
        </div>

        <div className="CSItem">
            <h2 className="Subtitle">Role and Responsibility</h2>
            <p className="Description">Wireframes, UI Design, Prototypes, Copywriting, Information Architecture, Developer Handoff.</p>
        </div>

        <div className="CSItem">
            <h2 className="Subtitle">Tools</h2>
            <p className="Description">Sketch, Invision</p>
        </div>

        <div className="CSItem">
            <h2 className="Subtitle">Timeline</h2>
            <p className="Description">Approx. 2 weeks</p>
        </div>

        <div className="CSItem">
            <h2 className="Subtitle">Scope and Constraints</h2>
            <p className="Description"> <b style={{color: '#361671'}}>Short Timeline</b> It was important to the company to launch the new landing page simultaneous to the app launch. This meant I had 2 weeks to finalize the designs and 2 weeks to work with a developer to make the website live.</p>
        </div>
        <div className="CSItem">
            <h2 className="Subtitle">Process</h2>
            <div className="ProcessItem">
                <h3 className="SectionTitle">1. Research</h3>
                <div className="SectionDescription"> 
                    <p>Due to the limited timeline, it was out of scope to kickstart this redesign with user interviews and personas. Instead I spent some time researching standard information architecture, copywriting, and designs of companies similar to Curia. <br/> <br/> The top trends I gathered included:</p>
                    <ul>
                        <li>• A short tagline of what the product offers</li>
                        <li>• Screenshots to explain how the app works</li>
                        <li>• Minimal text</li>
                        <li>• Bolded, large font to highlight USPs</li>
                        <li>• Call to action / actionable language</li>
                    </ul>
                </div>
            </div>

            <div className="ProcessItem">
                <h3 className="SectionTitle">2. Information Architecture</h3>
                <div className="SectionDescription"> 
                    <p>Based on this research I organized the information to be included in the company’s website. Finalizing the architecture took several iterations. The original structure included confusing section/page names and was not intuitive, so discussing this with my team helped consolidate the pages into a more concise architecture.</p>
                    <img src={InfoArchitecture} alt="architecture flowchart" className="flowchart"/>
                </div>
            </div>

            <div className="ProcessItem">
                <h3 className="SectionTitle">3. Wireframes </h3>
                <div className="SectionDescription"> 
                    <p>Once the information architecture was finalized, I dove into creating the wireframes. <br/> My main challenges at this stage were:</p>
                    <ul>
                        <li><b>• Deciding where to place information about the clinical trial dashboards.</b> This was a significant pain point because the dashboards target a different audience group than the mobile app. Therefore I needed to display the dashboards such that it’s easy to find for potential dashboard users, yet not too prominent that it confuses potential app users.</li>
                        <li><b>• Deciding what information should be placed on the landing page, have its own dedicated section, or both.</b></li>
                    </ul>
                </div>
            </div>

            <div className="ProcessItem">
                <h3 className="SectionTitle">4. UI and Prototypes </h3>
                <p>After iterating over the wireframes with my team, I created the UI prototype on Invision and worked closely with the developer to make the website live. The website can be visited at <a href="https://curia.app" style={{textDecoration: 'none', color: '#361671', fontWeight:'bold'}}>curia.app</a></p>
                <img src={UI} alt="site wireframes" className="wireframes"/>
            </div>

        </div>             
    </div>

export default curiaWebsite;