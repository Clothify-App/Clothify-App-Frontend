import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useAuth } from "../../Context/AuthContext";
import Loader from "../Loader/Loader";
import { useNavigate, Link } from "react-router-dom";
import usersServices from "../../Services/users.services";
function Login() {
  const email = useRef("");
  const password = useRef("");
  const { login, signUpWithGoogle, signUpWithFacebook, setUserID, userID } =
    useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignFacebook = async (e) => {
    try {
      let userDetails = await signUpWithFacebook();
      let { email } = userDetails.user;
      let id;
      await usersServices
        .checkIfUserExist(email)
        .then(async (res) => {
          let user = res.docs;
          let userExist = user.length;
          if (!userExist) {
            let newUser = {
              fullName: userDetails.user.displayName,
              email: userDetails.user.email,
              image: userDetails.user.photoURL,
            };
            const UserRes = await usersServices.addUser(newUser);
            id = UserRes.id;
            // console.log(id);
            localStorage.setItem("userID", id);
            setUserID(id);
          } else {
            id = user[0].id;
            // console.log(id);
            localStorage.setItem("userID", id);
            setUserID(id);
          }
        })
        .catch((err) => console.log(err));
      // console.log(userID);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignGoogle = async (e) => {
    try {
      let userDetails = await signUpWithGoogle();
      let { email } = userDetails.user;
      let id;
      await usersServices
        .checkIfUserExist(email)
        .then(async (res) => {
          let user = res.docs;
          let userExist = user.length;
          if (!userExist) {
            let newUser = {
              fullName: userDetails.user.displayName,
              email: userDetails.user.email,
              image: userDetails.user.photoURL,
            };
            const UserRes = await usersServices.addUser(newUser);
            id = UserRes.id;
            // console.log(id);
            localStorage.setItem("userID", id);
            setUserID(id);
          } else {
            id = user[0].id;
            // console.log(id);
            localStorage.setItem("userID", id);
            setUserID(id);
          }
        })
        .catch((err) => console.log(err));
      // console.log(userID);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let user = await login(email.current.value, password.current.value);
      navigate("/dashboard");
    } catch (err) {
      console.log("Sign in not performed. =>", err);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="z-50 bg-opacity-60 h-screen fixed bg-pink-100 top-0 left-0 w-full">
        <div className="fixed left-1/4 min-h-[35rem] max-w-[1000px] flex m-auto  top-[5rem] shadow-lg">
          <div className="flex-[0.5] px-10 bg-login-pattern bg-no-repeat bg-top bg- bg-contain bg-[#ffffff] bg-opacity-96 z-90 flex items-center justify-center flex-col text-black font-body">
            <h1 className="text-4xl mt-96 mr-9">Welcome Back!</h1>
            <p className="text-sm">
              To Keep Connected with us please
              <br />
              login with your personal info
            </p>
            <Link to="/register">
              <button
                id="signUpBtn"
                className="p-[10px] bg-transparent border-2 border-solid border-pink-500 w-[150px] rounded-2xl mt-[10px] hover:bg-pink-500 hover:text-white hover:duration-150"
              >
                Sign Up
              </button>
            </Link>
          </div>
          <div className="flex-[0.5] bg-white p-[10px] flex flex-col items-start">
            <div className="w-full flex justify-end">
              <Link
                to="/"
                className="flex mb-3 w-fit items-center pr-5  justify-end cursor-pointer hover:text-pink-600"
              >
                <AiOutlineArrowLeft />
                <span className="ml-2">Go to Home</span>
              </Link>
            </div>
            <div className="flex flex-col h-[100%] p-[30px] justify-between">
              <h2 className="font-bold text-lg">Sign In</h2>
              <div action="">
                <div className="flex flex-col my-5">
                  <label htmlFor="emailIp">Email Address</label>
                  <input
                    type="email"
                    id="emailIp"
                    ref={email}
                    className="w-[300px] border-b-[2px] border-b-black border-solid outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="passwordIp">Password</label>
                  <input
                    type="password"
                    id="passwordIp"
                    ref={password}
                    className="w-[300px] border-b-[2px] border-b-black border-solid outline-none"
                  />
                </div>
                <div className="max-w-[300px] m-auto">
                  <button
                    type="submit"
                    id="submitBtn"
                    className="p-[10px] border-2 border-pink-500 flex items-center justify-center w-full mt-[30px] cursor-pointer hover:bg-pink-500 rounded-full hover:text-white  hover:duration-300"
                    onClick={handleLogin}
                  >
                    {loading ? (
                      <div className="flex items-center gap-1">
                        <Loader size={15} /> <h3>Signing In..</h3>
                      </div>
                    ) : (
                      <h3>Continue</h3>
                    )}
                  </button>
                </div>
              </div>
              <div className=" text-center">
                <p>or Connect with Social Media</p>
              </div>

              <div
                onClick={handleSignGoogle}
                className=" p-2 rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.3)] cursor-pointer"
              >
                <span className="flex items-center justify-center text-base">
                  <FcGoogle className="text-2xl mx-2" />
                  <p>Sign in With Google</p>
                </span>
              </div>
              <div
                onClick={handleSignFacebook}
                className=" p-2 rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.3)] bg-blue-500 text-white cursor-pointer"
              >
                <span className="flex items-center justify-center text-base">
                  <BsFacebook className="text-2xl mx-2" />
                  <p>Sign in With Facebook</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
