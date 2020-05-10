import React from 'react'

const Tag = ({tag, name, link}) => {
   return (
      <div id="tag" className={tag}>
         <a href={link} alt="link to more info" rel="noopener noreferrer" style={{textDecoration:"none", color: "white"}} target="_blank"> {name} </a>
      </div>
   )
}

export default Tag