import React from 'react'
import './welcome.scss'
import {Link} from 'react-router-dom'

import agree from '../../assets/agree.jpg'

function Welcome() {
  return (
    <div className='welcome'>
        <div className="heading">
            <h3>Welcome to WhatsApp</h3>
        </div>
        <div className="image">
            <img src={agree} alt="Agree" />

        </div>
        <div className="text">
            <p>Read our <span>Privacy Policy.</span> Tap "Agree and Continue to accept <span>
                Terms and Services</span>"</p>

                <button>
                    <Link style={{textDecoration:'none' , color: 'white' }} to = '/Signuppage'>
                        Agree and Continue
                    </Link>
                    </button>

        </div>
    </div> 
  )
}

export default Welcome