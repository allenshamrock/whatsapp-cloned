import React from 'react'
import './Chatarea.scss'
// import background from '../../assets/background.jpg'
import jordan from '../../assets/jordan.jpg'
import {BiDotsVertical} from 'react-icons/bi'
import Sentmessage from '../Sentmessage/Sentmessage'
import Recievedmessage from '../Recievedmessage/Recievedmessages'
import Inputbar from '../Inputbar/Inputbar'


function Chatarea() {
  const sentmessage=[
    {
    id:0,
    message:'Wagwan bruv, shout me when you get the straps'
  },
]

const recievedmessage=[
  {
  id:0,
  message:'safi.Bruv no pressure'
}
]
//message functionality
  return (
    <div className='Chatarea' >
      
       <div className="drop">
           <img src={jordan} alt="Michael Jordan" />
         
           <BiDotsVertical className='vertical' />
           
        </div>
{
  sentmessage.map((sentmessage)=>(
     <Sentmessage key={sentmessage.id} message={sentmessage.message}/>
  ))
}  

{
  recievedmessage.map((recievedmessage)=>(
  <Recievedmessage key ={recievedmessage.id} message={recievedmessage.message}/>
))
}
        
         <Inputbar/>
      {/* <img src={background} alt="WhatsApp-background" /> */}

   
      
    </div>
  )
}

export default Chatarea