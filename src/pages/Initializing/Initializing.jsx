import React from 'react'
import agree from '../../assets/agree.jpg'
import './Initializing.scss'
import { Link } from 'react-router-dom'


function Initializing() {
  return (
    <div className='Initializing'>
        <p className='initial'>Initialising....</p>
        <p>Please wait a moment</p>
        <div className="img">
             <img src={agree} alt="Agree" />
        </div>
          <button>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/Chat' >Next</Link>
        </button>
    </div>
  )
}

export default Initializing