import React from 'react'
import Topverify from '../../components/Topverify/Topverify'
import { FcMissedCall } from 'react-icons/fc'
import './Verify.scss'
import Verifytext from '../../components/Verifytext/Verifytext'
import { Link } from 'react-router-dom'

function Verify() {
  const texts = [{
    id: 0,
    message: 'Allow WhatsApp to manage this call so we can call your phone and end the call automatically'
  },
    {
      id: 1,
      message: 'Allow WhatsApp to do a one-time check and access your call log so that we can confirm that you received the call'
    }
  ]
  return (
      <div className='verify'>
      <Topverify />
      <FcMissedCall className='icon' />
      <h3>to automatically verify with a missed call to your phone :</h3>

      {
        texts.map((text) => (
          <Verifytext key={text.id} text={ text.message} />
        ))
      }

      <div className="textbutton">
        <p>learn more about how you can manage your <span>phone verification permissions</span></p>

        <button>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/Messages' >Continue</Link>
        </button>

        <button>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/Messages' >Continue with SMS</Link>
        </button>
      </div>
    </div>
  )
}

export default Verify