import React from 'react'
import Form from '../components/Form'
import '../assets/styles/registrationPage.css'
export default function RegistrationPage() {
  return (
    <div className='main-box'>
        <div className="left-side">
            <h1>Discover new things on superapp</h1>
        </div>
        <div className='right-side'>
            <Form />
        </div>
    </div>
  )
}
