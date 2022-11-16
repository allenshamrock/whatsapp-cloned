import React from 'react'
import './Recievedmessages.scss'

function Recievedmessages({message}) {
  return (
    <div className='Recievedmessages' >
        <p> {message}</p>
        <p>Utakam mtaa?</p>
    </div>
  )
}

export default Recievedmessages