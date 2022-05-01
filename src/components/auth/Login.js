import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'


function Login() {
  return (
    <div className='min-h-[35rem] max-w-[1000px] flex m-auto relative top-[5rem] shadow-lg'>
        <div className="flex-[0.5] bg-[#6FBCF3] flex items-center justify-center flex-col text-white font-body">
            <h1 className='text-5xl'>Welcome Back!</h1>
            <p className='text-base'>To Keep Connected with us please<br />
            login with your personal info</p>
            <button id='signUpBtn' className='p-[10px] bg-transparent border-2 border-solid border-black w-[150px] rounded-2xl mt-[10px]'>Sign Up</button>
        </div>
        <div className="flex-[0.5] bg-white p-[10px] flex flex-col items-start">
            <div className="flex items-center w-[100%] justify-end cursor-pointer">
                    <AiOutlineClose />
            </div>
            <div className="flex flex-col h-[100%] p-[30px] justify-between">
                
                <h2 className='text-lg font-bold'>Sign In</h2>
                <form action="">
                    <div className="flex flex-col">
                        <label htmlFor="emailIp">Email Address</label>
                        <input type="email" id='emailIp' className='w-[300px] border-b-[2px] border-b-black border-solid outline-none mb-3'/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="passwordIp">Password</label>
                        <input type="password" id='passwordIp' className='w-[300px] border-b-[2px] border-b-black border-solid outline-none'/>
                    </div>
                    <div className="max-w-[300px] m-auto">
                        <button id="submitBtn" className='p-[10px] w-full mt-[30px] cursor-pointer border-none bg-[#F28C8C] text-white'>Continue</button>
                    </div>
                </form>
                <div className="text-center">
                    <p>or Connect with Social Media</p>
                </div>
                <div className="text-center bg-[#00ACEE] h-[30px] flex cursor-pointer  items-center justify-center text-white ">
                    <p>Sign in With Twitter</p>
                </div>
                <div className="text-center bg-[#00ACEE] h-[30px] flex cursor-pointer items-center justify-center text-white ">
                    <p>Sign in With Facebook</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login