import React from 'react'
import './Profile.scss'
import {TbCameraPlus} from 'react-icons/tb'
import {BsEmojiSmile} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className='Profile'>
         <h3>profile info</h3>
          <p>Please provide your name and an optional profile photo</p>

          <TbCameraPlus className='camera' />
          
          <form className='namearea'>
              <input type="text" placeholder='Type your name here' />
              <label for='text'><BsEmojiSmile/></label>
          </form>

          <button>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/Initializing' >next</Link>
        </button>
    </div>
  )
}

export default Profile