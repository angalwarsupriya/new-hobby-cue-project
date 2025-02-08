import React from 'react'
import './index.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

function JoinInCompo() {
  return (
    <div className='join-in-conatiner mt-md-4'>
    <div className='login-con'>
        <div className='box'>
            <FcGoogle className='g-i'/>
            <p className='continue-p'>Continue with Google.</p>
       </div>
              
        <div className='box'>
            <FaFacebook className='g-i'/>
            <p className='continue-p'>Continue with Facebook.</p>
        </div>
    </div>
    <div className='lin-con d-flex justify-content-center mt-md-3'>
        <hr style={{fontWeight:'bolder', color:'black' ,width:'30%'}}/>
        <p className='line-p'>Or connect with</p>
        <hr style={{fontWeight:'bolder', color:'black',width:'30%'}}/>
    </div>  
    <form className='form-con'>
        <input type='email' className='input' placeholder='Email'/>
        <input type='password' className='input' placeholder='Passowrd'/>
        <p className='strenth-p'>Passowrd strengh</p>

        <div className='sumit-con mt-md-2'>
            <p className='submmit-p mb-md-1'>by continuin, your agree to our <span className='span-p'>Terms of Service</span> and <span className='span-p'>Policy</span></p>
            <button type='submit' className='submmit-btn'>Continue</button>
        </div>
    </form>
</div>
  )
}

export default JoinInCompo