import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import { UserAuth } from '../context/AuthContext'

const Login = () => {
  const [error,setError]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const{user,logIn}=UserAuth()
  const navigate=useNavigate()

  const handleSubmit= async (e)=>{
    e.preventDefault()
    setError()
    try{
      await logIn(email,password)
      navigate('/')
    }catch(error){
      console.log(error)
      setError(error.message)
    }
  }

  return (
    <div className="w-full h-screen">
    <img
      className="hidden sm:block absolute h-full w-full object-cover"
      src="https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/f1cda516-7152-45dd-8483-0c80eeea22ae/RS-en-20220808-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt="/"
    />
    <div className="bg-black/60 top-0 left absolute w-full h-screen"></div>
    <div className="fixed w-full px-4 py-24 z-50">
      <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
        <div className="max-w-[320px] mx-auto py-16">
          <h1 className="text-3xl font-bold">Sign In</h1>
          {error ? <p className='p-3 bg-red-400 mt-3'>{error}</p> : null}
          <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
            <input
            onChange={(e)=>setEmail(e.target.value)}
              className="bg-gray-700 p-3 my-2 rounded"
              type="email"
              placeholder="Email"
              autoComplete="email"
            />
            <input
            onChange={(e)=>setPassword(e.target.value)}
              className="bg-gray-700 p-3 my-2 rounded"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <button className="bg-red-600 py-3 my-6 rounded font-bold">
              Sign In
            </button>
            <div className="flex justify-between text-sm text-gray-600">
              <p>
                <input className="mr-2" type="checkbox" />
                Remember me
              </p>
              <p>Need Help?</p>
            </div>
            <p className="py-8">
              <span className="text-gray-600">
                New to Netflix?    
              </span>{" "}
               <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login