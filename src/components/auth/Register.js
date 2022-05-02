import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
function Register({setLogin}) {
  return (
    <div className='fixed left-1/4 min-h-[35rem] max-w-[1000px] flex m-auto top-[5rem] shadow-lg'>
        <div className="flex-[0.5] bg-[#6FBCF3] flex items-center justify-center flex-col text-white font-body p-10">
            <h1 className='text-5xl'>Welcome Back!</h1>
            <p className='text-base'>To Keep Connected with us please<br />
            login with your personal info</p>
            <button id='signInBtn' className='p-[10px] bg-transparent border-2 border-solid border-black w-[150px] rounded-2xl mt-[10px]' onClick={()=>{setLogin(true)}}>Sign In</button>
        </div>
        <div className="flex-[0.5] bg-white p-[20px] flex flex-col items-center justify-center">
            <div className="flex items-center w-[100%] justify-end cursor-pointer">
                    <AiOutlineClose />
            </div>
            <div className="flex flex-col h-[100%] w-[80%] justify-between">
                <div className="text-center bg-[#3487E9] h-[50px] flex cursor-pointer  items-center justify-center text-white ">
                    <p>SIGN UP WITH FACEBOOK</p>
                </div>
                <div className="flex justify-center items-center">
                    <span className='w-[50%]'><hr /></span>
                    <span className='mx-3'><p>or</p></span>
                    <span className='w-[50%]'><hr /></span>
                </div>
                <div className="text-center font-bold">
                     Sign up with your email address
                </div>
                <div className="w-[100%] h-[100%] mt-[15px]">
                    <form action="" className='flex flex-col h-[90%] w-full justify-between'>
                        <input type="email" name="email" id="" className='p-[5px] outline-none text-lg border-b-[2px] border-b-black border-solid w-[100%]' placeholder='Email'/>
                        <input type="email" name="confirmEmail" id="" className='p-[5px] border-b-[2px] border-b-black border-solid outline-none text-lg' placeholder='Confirm email'/>
                        <input type="password" name="password" id="" className='p-[5px] border-b-[2px] border-b-black border-solid outline-none text-lg' placeholder='Password'/>
                        <div className="birthData">
                            <label htmlFor="dateOfBirth">Date of Birth: </label>
                            <input type="date" name="dob" id="dateOfBirth" className='p-[5px] border-b-[2px] border-b-black border-solid outline-none text-lg w-[100%]' placeholder='Date of Birth'/>
                        </div>
                        <div className="flex items-center justify-between">
                            <input type="radio" name="sex" id="radioOption1" value="Male"/><label htmlFor="radioOption1">Male</label>
                            <input type="radio" name="sex" id="radioOption2" value="Femal"/><label htmlFor="radioOption1">Female</label>
                            <input type="radio" name="sex" id="radioOption3" value="NonBinary"/><label htmlFor="radioOption1">Non-binary</label>
                        </div>
                        <div className="flex items-center justify-center text-center">
                            <p className='bg-green-700 p-[10px] border-none cursor-pointer text-white rounded-sm w-[100%]'>SIGN UP</p> 
                        </div>
                    </form>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Register