import { React,useState } from 'react'

import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import './Signuppage.scss'

const Signuppage = () => {

    const[value,setValue] = useState();


  return (
    <div className='Signuppage'>
        <h2>Enter your phone number</h2>
            <div className="text">
                <p>Whatsapp will need to verify your phone number</p>
                <p><span>Whats my number?</span> </p>

            </div>

        <PhoneInput
        className = "phone "
        placeholder = "phone number"
        value ={value}
        onChange = {setValue}
        />
        <h4>Carrier charges may apply</h4>
        <button>
          <Link style={{textDecoration:'none' , color: 'white'}}   to ='/Verify'>
            Next
          </Link>
          </button>
          
    </div>
  )
}

export default Signuppage

