import React from 'react'
import './Textcenter.scss'
import{BiCheckDouble} from 'react-icons/bi'

function Textcenter({Name,img,date,msg,time}) {
  return (
    <div className='Textcenter' >
     <div className="message-container">
        <img src={img} alt="Michael Jordan" />
        <div className="text-message">
            <h3>{Name}</h3>
            <div className="ticks">
          <BiCheckDouble className={"()? 'delivered' : 'ticked' "} />
          <p>{msg} </p>
        </div>

        </div>
        <div className="message-timer">
          <p>{time}</p>
          <h6>{date}</h6>
        </div>
     </div>
    </div>
  )
}

export default Textcenter