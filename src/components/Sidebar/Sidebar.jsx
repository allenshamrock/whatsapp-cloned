import React from 'react'
import Avatararea from '../Avatararea/Avatararea'
import Search from '../Search/Search'
import './Sidebar.scss'
import Textcenter from '../Textcenter/Textcenter'
import jordan from '../../assets/jordan.jpg'

function Sidebar() {
  const users=[
    {
      id:1,
      Name:'Wizzy',
      image:jordan,
      message:'Friday',
      time:'08:00pm',
      date:'Today'
    },

       {
      id:2,
      Name:' Shakur',
      image:jordan,
      message:'Rada vipi?',
      time:'08:00pm',
      date:'Today'
    },

       {
      id:3,
      Name:'Kanye ',
      image:jordan,
      message:'Fine',
      time:'08:00pm',
      date:'Today'
    },
       {
      id:4,
      Name:'Bey T',
      image:jordan,
      message:'Sometimes',
      time:'08:00pm',
      date:'Today'
    },{
      id:5,
      Name:'Sabs',
      image:jordan,
      message:'Sometimes',
      time:'08:00pm',
      date:'Today'
    },
      {
      id:6,
      Name:'Kanye ',
      image:jordan,
      message:'Fine',
      time:'08:00pm',
      date:'Today'
    }
    

  ]
  return (
    <div className='Sidebar' >
        <Avatararea/>
        <Search/>
       
          {
            users.map((user)=>(
              <Textcenter key ={user.id}  Name={user.Name} img={user.image} msg={user.message} 
              time={user.time} date={user.date}/>
            ))
          }

        
    </div>
  
 )

}

export default Sidebar