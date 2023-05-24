import React, { useState } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { auth } from '../firebase'
import { sendPasswordResetEmail } from 'firebase/auth'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')


  function submitHandler(e) {
    e.preventDefault()
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('password reset email sent')
        setMessage('Check your email to reset password')
      })
      .catch((error) => {
        console.log(error)
        setError('Email not found')
      })

  }



  return (
    <div>
      <div className=' flex flex-col mt-56 justify-center items-center'>
        <div className="relative mt-1 rounded-md shadow-sm">
        <div className="relative mt-1  rounded-lg w-64 p-2 mb-3 ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <FaRegUser  className=" text-white  ml-2 " />
        </div>
        <input
          type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Admin Email'
          className="block w-full bg-cyan-600  text-white rounded-md outline-none pl-10 placeholder:text-white sm:text-sm hover:bg-cyan-600 
          focus:ring-cyan-500 "
          
        />
      </div>
        </div>
        <button className='block w-60 ml-2 p-2 justify-center mt-5  rounded-lg  bg-lime-600  text-sm font-medium text-white  hover:bg-lime-500 ' onClick={submitHandler}>Submit</button>
      </div>
    </div>
  )
}

export default ForgotPassword