import React from 'react'
import './register.css'
import {AiOutlineClose} from 'react-icons/ai'
function Register() {
  return (
    <div className='register'>
        <div className="leftContent">
            <h1>Welcome Back!</h1>
            <p>To Keep Connected with us please<br />
            login with your personal info</p>
            <button id='signInBtn'>Sign In</button>
        </div>
        <div className="rightContent">
            <div className="closeIcon">
                    <AiOutlineClose />
            </div>
            <div className="container">
                <div className="facebookBtn">
                    <p>SIGN UP WITH FACEBOOK</p>
                </div>
                <div className="hrContent">
                    <span><hr /></span>
                    <span id="or"><p>or</p></span>
                    <span><hr /></span>
                </div>
                <div className="innerText">
                     Sign up with your email address
                </div>
                <div className="form">
                    <form action="">
                        <input type="email" name="" id="" className='inputField' placeholder='Email'/>
                        <input type="email" name="" id="" className='inputField' placeholder='Confirm email'/>
                        <input type="password" name="" id="" className='inputField' placeholder='Password'/>
                        <input type="date" name="" id="" className='inputField' placeholder='Date of Birth'/>
                        <div className="radioOptions">
                            <input type="radio" name="sex" id="radioOption1" /><label htmlFor="radioOption1">Male</label>
                            <input type="radio" name="sex" id="radioOption2" /><label htmlFor="radioOption1">Female</label>
                            <input type="radio" name="sex" id="radioOption3" /><label htmlFor="radioOption1">Non-binary</label>
                        </div>
                        <div className="signUp">
                            <input type="submit" value="SIGN UP" />
                        </div>
                    </form>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Register