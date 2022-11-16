import React from 'react'
import './Avatararea.scss'
import jordan from '../../assets/jordan.jpg'
import {BsPlusCircleDotted} from 'react-icons/bs'
import {BiMessageDetail} from 'react-icons/bi'
import {BiDotsVertical} from 'react-icons/bi'

function Avatararea() {
  return (
    <div className='Avatararea'>
        <div className="droppic">
           <img src={jordan} alt="Michael Jordan" />
           <h3>Kanye East</h3>
           <p>online</p>
           <BsPlusCircleDotted className='dotted' />
           <BiMessageDetail className='messageicon'/>
           <BiDotsVertical className='vertical' />
        </div> 
    </div>
  )
}

export default Avatararea