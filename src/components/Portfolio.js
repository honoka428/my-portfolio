import React from 'react'
import portfolioLogo from '../images/portfolio.svg'

const Portfolio = () => 
 <div>
    <img src={portfolioLogo} className="portfolioLogo" alt="portfolio logo" />
    <h1 id="header" className="portfolioHeader"> Portfolio </h1>
    <p id="description" className="portfolioDescription"> A professional portfolio to showcase my projects and work history (this website). </p>
 </div>

export default Portfolio