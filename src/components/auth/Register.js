import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useAuth } from "../../Context/AuthContext";
import UserServices from "../../Services/users.services";
import Loader from "../Loader/Loader";
function Register() {
  const email = useRef("");
  const password = useRef("");
  const dob = useRef("");
  const fullName = useRef("");
  const [gender, setGender] = useState("");
  const { signup, signUpWithGoogle, signUpWithFacebook } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignGoogle = async (e) => {
    try {
      let userDetail = await signUpWithGoogle();
      let newUser = {
        fullName: userDetail.user.displayName,
        email: userDetail.user.email,
      };
      const UserRes = await UserServices.addUser(newUser);
      var UserID = UserRes.id;
      console.log(newUser, UserID);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignFacebook = async (e) => {
    try {
      let userDetail = await signUpWithFacebook();
      let newUser = {
        fullName: userDetail.user.displayName,
        email: userDetail.user.email,
      };
      const UserRes = await UserServices.addUser(newUser);
      var UserID = UserRes.id;
      console.log(newUser, UserID);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      email: email.current.value,
      dob: dob.current.value,
      fullName: fullName.current.value,
      gender: gender,
    };
    console.log(newUser);
    try {
      setLoading(true);
      await signup(email.current.value, password.current.value);
      const UserRes = await UserServices.addUser(newUser);
      var UserID = UserRes.id;
      navigate("/dashboard");
    } catch (err) {
      console.log("Please Enter Details or Firebase Error.", err);
    }
    setLoading(false);
  };
  return (
    <div className="z-50 bg-opacity-60 h-screen fixed bg-pink-100 top-0 left-0 w-full">
      <div className="fixed left-1/4 min-h-[35rem] w-[745px] flex m-auto top-[5rem] shadow-lg">
        <div className="flex-[0.5] px-10 bg-login-pattern bg-no-repeat bg-top bg- bg-contain bg-[#ffffff] bg-opacity-96 flex items-center justify-center flex-col text-black font-body p-5">
          <h1 className="text-4xl text-center mt-96 mr-9">Welcome Back!</h1>
          <p className="text-sm">
            To Keep Connected with us please
            <br />
            Login with your personal info
          </p>
          <Link to="/login">
            <button
              id="signUpBtn"
              className="p-[10px] bg-transparent border-2 border-solid border-pink-500 w-[150px] rounded-2xl mt-[10px] hover:bg-pink-500 hover:text-white hover:duration-150"
            >
              Sign In
            </button>
          </Link>
        </div>
        <div className="flex-[0.5] bg-white p-[10px] flex flex-col items-center justify-center">
          <div className="w-full flex justify-end">
            <Link
              to="/"
              className="flex mb-3 w-fit items-center pr-5  justify-end cursor-pointer hover:text-pink-600"
            >
              <AiOutlineArrowLeft />
              <span className="ml-2">Go to Home</span>
            </Link>
          </div>
          <div className="flex flex-col h-[100%] w-[90%] justify-between">
            <div
              onClick={handleSignGoogle}
              className="m-2 p-2 rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.3)] cursor-pointer"
            >
              <span className="flex items-center justify-center text-base">
                <FcGoogle className="text-2xl mx-2" />
                <p>Sign Up With Google</p>
              </span>
            </div>
            <div
              onClick={handleSignFacebook}
              className="m-2 p-2 rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.3)] bg-blue-500 text-white cursor-pointer"
            >
              <span className="flex items-center justify-center text-base">
                <BsFacebook className="text-2xl mx-2" />
                <p>Sign in With Facebook</p>
              </span>
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
                onSubmit={handleSignUp}
              >
                <input
                  type="text"
                  ref={fullName}
                  name="name"
                  className="p-[5px] outline-none text-sm border-b-[2px] border-b-black border-solid w-[100%]"
                  placeholder="Name"
                />
                <input
                  type="email"
                  ref={email}
                  name="email"
                  className="p-[5px] border-b-[2px] border-b-black border-solid outline-none text-sm"
                  placeholder="Email"
                />
                <input
                  type="password"
                  ref={password}
                  name="password"
                  className="p-[5px] border-b-[2px] border-b-black border-solid outline-none text-sm"
                  placeholder="Password"
                />
                <div className="birthData">
                  <label htmlFor="dateOfBirth">Date of Birth: </label>
                  <input
                    type="date"
                    ref={dob}
                    name="dob"
                    id="dateOfBirth"
                    className="p-[5px] border-b-[2px] border-b-black border-solid outline-none text-base w-[100%]"
                    placeholder="Date of Birth"
                  />
                </div>
                <div
                  className="flex items-center justify-between"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <input
                    type="radio"
                    className="h-4 w-4"
                    name="sex"
                    id="radioOption1"
                    value="Male"
                  />
                  <label htmlFor="radioOption1">Male</label>
                  <input
                    type="radio"
                    className="h-4 w-4"
                    name="sex"
                    id="radioOption2"
                    value="Female"
                  />
                  <label htmlFor="radioOption2">Female</label>
                  <input
                    type="radio"
                    className="h-4 w-4"
                    name="sex"
                    id="radioOption3"
                    value="Non-Binary"
                  />
                  <label htmlFor="radioOption3">Non-binary</label>
                </div>
                <div className="flex items-center justify-center text-center">
                  <button
                    type="submit"
                    id="submitBtn"
                    className="p-[10px] border-2 border-pink-500 flex items-center justify-center w-full mt-3 cursor-pointer hover:bg-pink-500 rounded-full hover:text-white  hover:duration-300"
                  >
                    {loading ? (
                      <div className="flex items-center gap-1">
                        <Loader size={15} /> <h3>Signing Up..</h3>
                      </div>
                    ) : (
                      <h3>Sign Up</h3>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
