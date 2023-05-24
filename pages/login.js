/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { EnvelopeIcon } from '@heroicons/react/20/solid'
import { FaRegUser } from 'react-icons/fa'
import { FiKey } from 'react-icons/fi'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import { withPublic } from '../context/Route'





function Login({auth}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLoggingIn, setIsLoggingIn] = useState(true)
  const router = useRouter()

  {/*function login(e){
    e.preventDefault()
     console.log(email,password)
  }*/}



  const { login, currentUser,  } = auth

  async function submitHandler() {
    try {
      if (!email || !password) {
        setError('Please enter email and password')
        return
      }
      await login(email, password)

      router.push('/')
      console.log('hello')
    }
    catch(e) {
      console.log(e.message)
    }

  }

 

  return (
    <>
      <div >
        <div className=' flex flex-col justify-center items-center'>

          <div className='mt-56'>
            <img className="h-24 w-64" src="/login.png" alt="Your Company" />

          </div>


          <div className="relative mt-1 rounded-md shadow-sm">
            {/*<div className='bg-cyan-600 rounded-lg w-64 p-2 flex items-center mb-3'>
              <div className='flex justify-between'>
                <className='text-white mr-2' />
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Admin Email' className=' bg-cyan-600 rounded-lg text-white outline-none text-sm flex-1 ' required />
              </div>
  </div>*/}
  <div>
     
      <div className="relative mt-1  rounded-lg w-64 p-2 mb-3">
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

    <div className="relative mt-1  rounded-lg w-64 p-2 mb-3 ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center ml-2 pl-3">
          <FiKey  className=" text-white -mt-4" />
        </div>
        <input
          type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'
          className="block w-full bg-cyan-600 -mt-5 text-white rounded-md outline-none pl-10 placeholder:text-white sm:text-sm hover:bg-cyan-600 
          focus:ring-cyan-500 "
          
        />
      </div>

            



            <button className='block w-60 ml-2 p-2 justify-center mt-5  rounded-lg  bg-lime-600  text-sm font-medium text-white  hover:bg-lime-500 
            ' onClick={submitHandler} >LogIn</button>
            {/*<h1>{currentUser?.uid}</h1>*/}
            <div className="text-xs text-right font-abc mt-2">
             <Link href='/forgotPassword' >Forgot Password</Link>
            </div>










          </div>
        </div>

      </div>
    
      
    </>
  )
}

export default withPublic(Login) 

    
  
