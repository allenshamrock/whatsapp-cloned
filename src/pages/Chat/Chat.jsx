import React from 'react'
import './Chat.scss'
import Chatarea from '../../components/Chatarea/Chatarea'
import Sidebar from '../../components/Sidebar/Sidebar'
function Chat() {
  return (
    <div className='Chat'> 
            <Sidebar/>
            <Chatarea/>
    </div>
  )
}

export default Chat