import React, { useState } from 'react'
import "./LoginPopup.css"

const LoginPopup = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState("Sign Up")
  return (
    <div className='login-popup'>
        <form className="login-container">
            <div className="login-tittle">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src='/images/cross_icon.png' alt=''/>
            </div>
            <div className="login-inputs">

                {currentState=="Login"?<></>:<input type='text' placeholder='Your Name' required/>}
                <input type='email' placeholder='Email' required/>
                <input type = 'password' placeholder='Password'/>

            </div>
            <button>{currentState==="Sign Up"?"Create Account" : "Login"}</button>
            <div className='login-condition'>
                <input type='checkbox' required/>
                <p>By Continuing,I agree to the terms of use and privacy policy </p>
            </div>
            {currentState==="Login" ?
             <p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
             :
             <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Click here</span></p>}

        </form>
     
    </div>
  )
}

export default LoginPopup