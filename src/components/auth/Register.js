import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Slide } from "react-reveal";
function Register({ setToggle, setloginOpen }) {
  return (
    <div className="z-50 bg-opacity-60 h-screen fixed bg-black top-0 left-0 w-full">
      <Slide right>
        <div className="fixed left-1/4 min-h-[35rem] w-[745px] flex m-auto top-[5rem] shadow-lg">
          <div className="flex-[0.5] px-10 bg-login-pattern bg-no-repeat bg-top bg- bg-contain bg-[#ffffff] bg-opacity-96 flex items-center justify-center flex-col text-black font-body p-5">
            <h1 className="text-4xl text-center mt-96 mr-9">Welcome Back!</h1>
            <p className="text-sm">
              To Keep Connected with us please
              <br />
              login with your personal info
            </p>
            <button
              id="signInBtn"
              className="p-[10px] bg-transparent border-2 border-solid border-black w-[150px] rounded-2xl mt-[10px] hover:bg-black hover:text-white hover:duration-500"
              onClick={() => {
                setToggle(true);
              }}
            >
              Sign In
            </button>
          </div>
          <div className="flex-[0.5] bg-white p-[10px] flex flex-col items-center justify-center">
            <div className="flex items-center w-[100%] justify-end cursor-pointer">
              <AiOutlineClose
                className="hover:scale-125 duration-300"
                onClick={() => {
                  setloginOpen(false);
                }}
              />
            </div>
            <div className="flex flex-col h-[100%] w-[90%] justify-between">
              <div className="text-center bg-[#3487E9] h-[50px] flex cursor-pointer  items-center justify-center text-white my-4 hover:opacity-90 hover:duration-200">
                <p>SIGN UP WITH FACEBOOK</p>
              </div>
              <div className="flex justify-center items-center">
                <span className="w-[50%]">
                  <hr />
                </span>
                <span className="mx-3">
                  <p>or</p>
                </span>
                <span className="w-[50%]">
                  <hr />
                </span>
              </div>
              <div className="text-center font-semiboldbold">
                Sign up with your email address
              </div>
              <div className="w-[100%] h-[100%] mt-[15px]">
                <form
                  action=""
                  className="flex flex-col h-[90%] w-full justify-between"
                >
                  <input
                    type="text"
                    name="name"
                    id=""
                    className="p-[5px] outline-none text-sm border-b-[2px] border-b-black border-solid w-[100%]"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="email"
                    id=""
                    className="p-[5px] border-b-[2px] border-b-black border-solid outline-none text-sm"
                    placeholder="email"
                  />
                  <input
                    type="password"
                    name="password"
                    id=""
                    className="p-[5px] border-b-[2px] border-b-black border-solid outline-none text-sm"
                    placeholder="Password"
                  />
                  <div className="birthData">
                    <label htmlFor="dateOfBirth">Date of Birth: </label>
                    <input
                      type="date"
                      name="dob"
                      id="dateOfBirth"
                      className="p-[5px] border-b-[2px] border-b-black border-solid outline-none text-lg w-[100%]"
                      placeholder="Date of Birth"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <input
                      type="radio"
                      name="sex"
                      id="radioOption1"
                      value="Male"
                    />
                    <label htmlFor="radioOption1">Male</label>
                    <input
                      type="radio"
                      name="sex"
                      id="radioOption2"
                      value="Femal"
                    />
                    <label htmlFor="radioOption1">Female</label>
                    <input
                      type="radio"
                      name="sex"
                      id="radioOption3"
                      value="NonBinary"
                    />
                    <label htmlFor="radioOption1">Non-binary</label>
                  </div>
                  <div className="flex items-center justify-center text-center">
                    <p className="bg-green-700 p-[10px] border-none cursor-pointer text-white rounded-sm w-[100%] hover:opacity-95 hover:duration-300">
                      SIGN UP
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Register;
