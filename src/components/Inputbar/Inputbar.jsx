import React from 'react'
import './Inputbar.scss'
import {BiSmile} from 'react-icons/bi'
import {FaMicrophone} from 'react-icons/fa'
import {IoMdSend} from 'react-icons/io'

function Inputbar() {
  return (
    <div className='Inputbar' >
        <BiSmile  className='smile' />
        <input  type="text"  placeholder='Type text'/>
        <FaMicrophone className='Mic' />
        <IoMdSend className='send'/>
        
    </div>
  )
}

export default Inputbar