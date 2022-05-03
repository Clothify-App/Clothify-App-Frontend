import React,{useState} from "react";
import { AiOutlineClose } from "react-icons/ai";
import Register from "./Register";
import {Slide} from 'react-reveal';

function Login({ setlogin }) {

  const [loginRegisterToggle,setToggle] = useState(true);
  return (
    <>
    {loginRegisterToggle?(<div className="z-50 bg-opacity-60 h-screen fixed bg-black top-0 left-0 w-full">
      <Slide left>
      <div className="fixed left-1/4 min-h-[35rem] max-w-[1000px] flex m-auto  top-[5rem] shadow-lg">
        <div className="flex-[0.5] px-10 bg-login-pattern bg-no-repeat bg-top bg- bg-contain bg-[#ffffff] bg-opacity-96 z-90 flex items-center justify-center flex-col text-black font-body">
          <h1 className="text-4xl mt-[200px] mr-9">Welcome Back!</h1>
          <p className="text-sm">
            To Keep Connected with us please
            <br />
            login with your personal info
          </p>
          <button
            id="signUpBtn"
            className="p-[10px] bg-transparent border-2 border-solid border-black w-[150px] rounded-2xl mt-[10px] hover:bg-black hover:text-white hover:duration-500"
            onClick={()=>{setToggle(false)}}
          >
            Sign Up
          </button>
        </div>
        <div className="flex-[0.5] bg-white p-[10px] flex flex-col items-start">
          <div className="flex items-center w-[100%] justify-end cursor-pointer">
            <AiOutlineClose
              className="hover:scale-125 duration-300"
              onClick={() => {
                setlogin(false);
              }}
            />
          </div>
          <div className="flex flex-col h-[100%] p-[30px] justify-between">
            <h2 className="font-bold text-lg">Sign In</h2>
            <form action="">
              <div className="flex flex-col my-5">
                <label htmlFor="emailIp">Email Address</label>
                <input
                  type="email"
                  id="emailIp"
                  className="w-[300px] border-b-[2px] border-b-black border-solid outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="passwordIp">Password</label>
                <input
                  type="password"
                  id="passwordIp"
                  className="w-[300px] border-b-[2px] border-b-black border-solid outline-none"
                />
              </div>
              <div className="max-w-[300px] m-auto">
                <button
                  id="submitBtn"
                  className="p-[10px] w-full mt-[30px] cursor-pointer border-none bg-[#F28C8C] text-white hover:bg-slate-900 hover:duration-300"
                >
                  Continue
                </button>
              </div>
            </form>
            <div className=" text-center">
              <p>or Connect with Social Media</p>
            </div>
            <div className="text-center bg-[#00ACEE] h-[35px] flex cursor-pointer  items-center justify-center text-white hover:opacity-80">
              <p>Sign in With Twitter</p>
            </div>
            <div className="text-center bg-[#00ACEE] h-[35px] flex cursor-pointer items-center justify-center text-white hover:opacity-80">
              <p>Sign in With Facebook</p>
            </div>
          </div>
        </div>
      </div>
      </Slide>
    </div>):<Register setToggle={setToggle} setloginOpen={setlogin}/>}
    </>
    
  );
}

export default Login;
