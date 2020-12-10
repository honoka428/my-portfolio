import React from 'react'

const Notification = ({message}) => 
    <div style={{textAlign: 'center', paddingTop: '2%', paddingBottom: '2%', fontWeight: '600', color: '#83AFC8'}}>
        {message}
    </div>

export default Notification