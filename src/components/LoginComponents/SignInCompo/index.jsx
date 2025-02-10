import React from 'react'
import './index.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
function SignInCompo() {
  return (
    <div className='sign-in-conatiner mt-md-4'>
        
        <form className='form-con order-md-3'>
            <input type='email' className='input' placeholder='Email'/>
            <input type='password' className='input' placeholder='Passowrd'/>
            
            <div className='sumit-con mt-5'>
                <div className='remember-me-con d-flex align-item-center justify-content-between'>
                    <div className='remember-me-con-row d-flex mb-2'>
                        <input id='rememberme' type='checkbox' className='checkbox'/>
                        <label htmlFor='rememberme'> Remember me</label>
                    </div>
                    <div className='d-flex align-item-center'>
                          <IoMdLock style={{ fontSize: '20px' }}></IoMdLock>  
                          <p>Forgot Password</p>
                    </div>  
                </div>
                <button type='submit' className='submmit-btn'>Continue</button>
            </div>
          </form>
          <div className='lin-con d-flex justify-content-center mt-md-3 order-md-2'>
            <hr style={{fontWeight:'bolder', color:'black' ,width:'30%'}}/>
            <p className='line-p'>Or connect with</p>
            <hr style={{fontWeight:'bolder', color:'black',width:'30%'}}/>
        </div>  
          <div className='login-con order-md-1'>
            <div className='box'>
                <FcGoogle className='g-i'/>
                <p className='continue-p'>Continue with Google.</p>
           </div>
                  
            <div className='box'>
                <FaFacebook className='g-i'/>
                <p className='continue-p'>Continue with Facebook.</p>
            </div>
          </div>
         
    </div>
  )
}

export default SignInCompo