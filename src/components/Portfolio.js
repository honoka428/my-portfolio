import React from 'react'
import portfolioLogo from '../images/portfolio.svg'
import Tag from './Tag'
import portfolioTools from '../images/portfolioTools.svg'

const Portfolio = () => 
 <div>
    <img src={portfolioLogo} className="portfolioLogo" alt="portfolio logo" />
    <h1 id="header" className="portfolioHeader"> Portfolio </h1>
    <p id="description" className="portfolioDescription"> A professional portfolio to showcase my projects and work history (this website). </p>
    <Tag name={"Logo Design"} tag={"designTagPortfolio"}/>
    <Tag name={"Web Development"} tag={"devTagPortfolio"} link={"https://github.com/honoka428/my-portfolio"}/>
    <Tag name={"UX/UI"} tag={"uxuiTagPortfolio"} link={"https://www.figma.com/proto/vOKhK6EIdDgSt952aDK4xd/portolio-wireframe?node-id=0%3A2&scaling=min-zoom"}/>
    <img src={portfolioTools} className="portfolioTools" alt="tools used to make portfolio" id="tools"/>
 </div>

export default Portfolio