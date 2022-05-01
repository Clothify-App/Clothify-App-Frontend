import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import './login.css'

function Login() {
  return (
    <div className='login'>
        <div className="leftContent">
            <h1>Welcome Back!</h1>
            <p>To Keep Connected with us please<br />
            login with your personal info</p>
            <button id='signUpBtn'>Sign Up</button>
        </div>
        <div className="rightContent">
            <div className="closeIcon">
                    <AiOutlineClose />
            </div>
            <div className="container">
                
                <h2>Sign In</h2>
                <form action="">
                    <div className="option1">
                        <label htmlFor="emailIp">Email Address</label>
                        <input type="email" id='emailIp'/>
                    </div>
                    <div className="option1">
                        <label htmlFor="passwordIp">Password</label>
                        <input type="password" id='passwordIp'/>
                    </div>
                    <div className="submitOption">
                        <input type="submit" value="Continue" id="submitBtn" />
                    </div>
                </form>
                <div className="innerText">
                    <p>or Connect with Social Media</p>
                </div>
                <div className="twitterOption innerText">
                    <p>Sign in With Twitter</p>
                </div>
                <div className="facebookOption innerText">
                    <p>Sign in With Facebook</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login