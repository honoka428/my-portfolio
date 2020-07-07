import React from 'react';
import './CaseStudy.css';
import InfoArchitecture from '../images/flowchart.svg';
import UI from '../images/curiaSiteUI.svg';
import Logo from '../images/curiaLogo.svg'
import {Link} from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io'
import {FiExternalLink} from 'react-icons/fi';
import AppScreens from '../images/curiaScreens.svg';

const curiaWebsite = () => 
    <div className="CSWrapper">
        <Link exact="true" to="/" className="HomeLink"> <IoIosArrowBack/> Back </Link>
        <h1 className="MainTitle"> <b>Curia’s website redesign</b> <br/>for upcoming app launch. </h1>
        <a href="https://curia.app" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#361671"}}> curia.app <FiExternalLink/> </a>
        <img src={Logo} alt="curia logo" className="Logo"/>
        <img src={AppScreens} alt="curia app screens" className="AppScreens" />
        <div className="CSItem">
            <h2 className="Subtitle"> Project Background</h2>
            <div className="Description" >
                <p>Curia is a <b>health tech</b> company that helps cancer patients find information on treatments, clinical trials and experts. The pre-launch website included an overview of the product, a couple of blog posts, and a contact form.</p>           
            </div>        
        </div>

        <div className="CSItem">
            <h2 className="Subtitle">The Goal</h2>
            <p className="Description"> <i>To get more users to download the app upon product launch.</i> <br/> <br/> The high level goals of this project were to:</p>
            <ul>
                <li><b style={{color: '#000000'}}>1.</b> Illustrate how the app <b>benefits cancer patients</b></li>
                <li><b style={{color: '#000000'}}>2.</b> Convey the <b>trustworthiness of the company</b></li>
                <li><b style={{color: '#000000'}}>3.</b> Increase traffic to the company's <b>social media channels</b></li>
            </ul> 
        </div>

        <div className="CSItem">
            <h2 className="Subtitle" >Who are the users?</h2>
            <div className="Description">
                <p> <b> Cancer patients and caretakers</b> <br/> The company’s target audience for the mobile app.</p>
                <p> <b> Clinical trial coordinators</b> <br/> Curia also offers a dashboard to help coordinators recruit more patients for their clinical trial. This product is also featured on the website.</p>
            </div>
        </div>

        <div className="CSItem">
            <h2 className="Subtitle">My Role</h2>
            <p className="Description"> I was responsible for the entire lifecycle of this project, from <b> Defining the Scope</b> with my manager, to creating <b>User Flows</b> and <b>Wireframes</b>, <b>Copywriting</b>, designing the <b>UI</b> and making the <b>prototypes</b>, and working iteratively in the <b>Developer Handoff</b> to implement the designs.</p>
        </div>

        <div className="CSItem">
            <h2 className="Subtitle">Tools Used</h2>
            <p className="Description">Sketch & Invision</p>
        </div>

        <div className="CSItem">
            <h2 className="Subtitle">The Timeline</h2>
            <p className="Description">Approx. 2 weeks (Not including development)</p>
        </div>

        <div className="CSItem">
            <h2 className="Subtitle">Scope and Constraints</h2>
            <p className="Description"> <b> Short Timeline</b> It was important to the company to launch the new landing page simultaneous to the app launch. This meant I had 2 weeks to finalize the designs and 2 weeks to work with a developer to make the website live.</p>
        </div>
        <div className="CSItem">
            <h2 className="Subtitle">The Process</h2>
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
                    <p>Once the information architecture was finalized, I dove into creating the wireframes. <br/> <br/> My main challenges at this stage were:</p>
                    <ul>
                        <li><b>• Deciding where to place information about the clinical trial dashboards.</b> This was a significant pain point because the dashboards target a different audience group than the mobile app. Therefore I needed to display the dashboards such that it’s easy to find for potential dashboard users, yet not too prominent that it confuses potential app users.</li>
                        <li><b>• Deciding what information should be placed on the landing page, have its own dedicated section, or both.</b></li>
                    </ul>
                </div>
            </div>

            <div className="ProcessItem">
                <h3 className="SectionTitle">4. UI and Prototypes </h3>
                <p className="Description">After iterating over the wireframes with my team, I created the UI prototype on Invision and worked closely with the developer to make the website live. The website can be visited at <a href="https://curia.app" style={{textDecoration: 'none', color: '#361671', fontWeight:'bold'}}>curia.app</a></p>
                <img src={UI} alt="site UI" className="Prototype"/>
            </div>

            <div className="CSItem">
            <h2 className="Subtitle">The Outcome and Lessons Learned</h2>
            <p className="Description">The app launch was successful in hitting the target number of app downloads. We saw an increases in new website visitors parallel to the number app downloads which makes me optimistic for the role the website played in the company's launch success. With that being said, next time-if time allows-I definitely would like to dedicate time to <b>outline quantifiable KPIs</b> to measure the project's success more precisely.</p>
        </div>

        </div>             
    </div>

export default curiaWebsite;