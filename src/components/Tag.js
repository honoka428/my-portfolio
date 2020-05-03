import React from 'react'

const Tag = ({tag, name}) => {
   return (
      <div id="tag" className={tag}> {name}</div>
   )
}

export default Tag