import React from 'react';
import './CaseStudy.css';
import InfoArchitecture from '../images/flowchart.svg';
import UI from '../images/curiaSiteUI.svg';
import Logo from '../images/curiaLogo.svg'
import {Link} from 'react-router-dom';

const curiaWebsite = () => 
    <div className="CSWrapper">
        <Link exact="true" to="/" className="HomeLink"> Go Back </Link>
        <h1 className="MainTitle"> <b>Curia’s website redesign</b> <br/>for upcoming app launch. </h1>
        <img src={Logo} alt="curia logo" className="Logo"/>
        <div className="CSItem">
            <h2 className="Subtitle"> Introduction</h2>
            
            <div className="Description" >
                <p>Curia is a company that helps cancer patients find information on treatments, clinical trials and experts easily. Our pre-launch landing page simply included an overview of the product, a couple of blog posts, and a contact form. With a product launch coming up, Curia needed a more professional website that showcased:</p>
                <ul>
                    <li><b>1.</b> Why cancer patients should download the app</li>
                    <li><b>2.</b> Social media presence</li>
                    <li><b>3.</b> Press Releases</li>
                </ul>            
            </div>        
        </div>

        <div className="CSItem">
            <h2 className="Subtitle">Business Goal</h2>
            <p className="Description">Get more users to download the app upon product launch.</p>
        </div>

        <div className="CSItem">
            <h2 className="Subtitle" >Users and Audience </h2>
            <div className="Description">
                <ul>
                    <li> <b> Cancer patients and caretakers ~</b> The company’s target audience for the mobile app.</li>
                    <li> <b> Clinical trial coordinators ~</b> Curia also offers a dashboard to help coordinators recruit more patients for their clinical trial. This product is also featured on the website.</li>
                </ul>
            </div>
        </div>

        <div className="CSItem">
            <h2 className="Subtitle">Role and Responsibility</h2>
            <p className="Description">wireframing, prototyping, copywriting, UI design, information architecture, developer handoff.</p>
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
            <p className="Description"> <b>Short Timeline ~</b> It was important to the company to launch the new landing page simultaneous to the app launch. This meant I had 2 weeks to finalize the designs and 2 weeks to work with a developer to make the website live.</p>
        </div>
        <div className="CSItem">
            <h2 className="Subtitle">Process</h2>
            <div className="ProcessItem">
                <h3 className="SectionTitle">1. Research</h3>
                <div className="SectionDescription"> 
                    <p>Due to the limited timeline, it was out of scope to kickstart this redesign with user interviews and personas. Instead I began by answering the following questions to guide my decisions for the landing page.</p>
                    <ul>
                        <li> <b>1.</b> How should the user feel upon coming to our landing page?</li>
                        <li> <b>2.</b> What impression does the company want to give to potential users?</li>
                    </ul>
                    <p>I also spent some time researching standard information architecture of companies similar to Curia, as well as the tone of voice used in copywriting.</p>
                    <ul>
                        <li>• Explanation of product on landing page</li>
                        <li>• Minimal text</li>
                        <li>• Bold & large font to highlight main selling points</li>
                        <li>• Call to action</li>
                    </ul>
                </div>
            </div>

            <div className="ProcessItem">
                <h3 className="SectionTitle">2. Information Architecture</h3>
                <div className="SectionDescription"> 
                    <p>Based on this research I systemized information to be included in the company’s website.</p>
                    <ul>
                        <li>• Explanation of app</li>
                        <li>• Contact</li>
                        <li>• Social media</li>
                        <li>• Media featues</li>
                        <li>• Clinical trial dashboards</li>
                        <li>• Careers</li>
                        <li>• Blog articles</li>
                    </ul>
                    <p>Finalizing the architecture took several iterations. Getting feedback from my team helped consolidate the structure and wordsmith the headers to avoid any confusion.</p>
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
                <p>After discussing the wireframes with my team, I created the UI prototype on Invision and worked closely with the developer to make the website live. The website can be visited at <a href="https://curia.app" style={{textDecoration: 'none', color: 'black', fontWeight:'bold'}}>curia.app</a></p>
                <img src={UI} alt="site wireframes" className="wireframes"/>
            </div>

        </div>             
    </div>

export default curiaWebsite;