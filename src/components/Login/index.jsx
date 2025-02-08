import React, { useState } from 'react';
import './index.css';

// importingreact-icons
import { Row, Col } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

function Login() {
    // state between sign in and join 
    const [loginStatus, changeLoginStatus] = useState('SIGN_IN');
    const [passwordVisible, setPasswordVisible] = useState(false);
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

    return (
        <Col xs={12} md={4} className='login-con' >     
            <Row>
                <Col xs={12} md={12} className='login-con'>
                    {loginStatus === 'SIGN_IN' ?
                        <div className='sign-in-con'>
                            <div className='sign-in-login-con d-flex'>
                                <button onClick={() => changeLoginStatus('SIGN_IN')} style={{ backgroundColor: 'transparent', border: 'none', color: loginStatus === "SIGN_IN" ? ' #8064A2' : '#a69ab5' }}>
                                    Sign In
                                </button>
                                <button onClick={()=> changeLoginStatus('JOIN_IN')}  style={{backgroundColor:'transparent', border:'none',color:loginStatus==="JOIN_IN" ? ' #8064A2' : '#a69ab5'}}>
                                    Join In
                                </button>
                            </div>

                            <div className='continue-with-con'>
                                <div className='box'>
                                    <FcGoogle className='g-i'/>
                                    <p className='continue-p'>Continue with Google.</p>
                                </div>
                  
                                <div className='box'>
                                    <FaFacebook className='g-i'/>
                                    <p className='continue-p'>Continue with Facebook.</p>
                                </div>
                            </div>

                            <div className='lin-con d-flex'>
                                <hr style={{fontWeight:'bolder', color:'black' ,width:'30%'}}/>
                                <p className='line-p'>Or connect with</p>
                               <hr style={{fontWeight:'bolder', color:'black',width:'30%'}}/>
                            </div>
                

                            <form className='form-con'>
                                <input type='email' className='input' placeholder='Email'/>
                                <input type='password' className='input' placeholder='Passowrd'/>
                                <p className='strenth-p'>Passowrd strengh</p>

                                <div className='sumit-con'>
                                    <div className='remember-me-con'>
                                        <div className='remember-me-con-row d-flex'>
                                            <input id='rememberme' type='checkbox' className='checkbox'/>
                                            <label htmlFor='rememberme'> Remember me</label>
                                        </div>
                                </div>
                                <button type='submit' className='submmit-btn'>Continue</button>
                                </div>
                            </form>
                        </div>
                      :
                       <div className='join-con'>
                           <div className='sign-in-login-con d-flex'>
                                <button onClick={()=> changeLoginStatus('SIGN_IN')}  style={{backgroundColor:'transparent', border:'none',color:loginStatus==="SIGN_IN" ? ' #8064A2' : '#a69ab5'}}>
                                    Sign In
                                </button>
                                <button onClick={()=> changeLoginStatus('JOIN_IN')}  style={{backgroundColor:'transparent', border:'none',color:loginStatus==="JOIN_IN" ? ' #8064A2' : '#a69ab5'}}>
                                    Join In
                                </button>
                    
                            </div>

                            <div className='continue-with-con'>
                                <div className='box'>
                                   <FcGoogle className='g-i'/>
                                   <p className='continue-p'>Continue with Google.</p>
                                </div>
                  
                                <div className='box'>
                                    <FaFacebook className='g-i'/>
                                    <p className='continue-p'>Continue with Facebook.</p>
                                </div>
                            </div>

                            <div className='lin-con d-flex'>
                                <hr style={{fontWeight:'bolder', color:'black' ,width:'30%'}}/>
                                <p className='line-p'>Or connect with</p>
                                <hr style={{fontWeight:'bolder', color:'black',width:'30%'}}/>
                            </div>
                

                            <form className='form-con'>
                                <input type='email' className='input' placeholder='Email'/>
                                <input type='password' className='input' placeholder='Passowrd'/>
                                <p className='strenth-p'>Passowrd strengh</p>

                                <div className='sumit-con'>
                                    <p className='submmit-p'>by continuin, your agree to our <span className='span-p'>Terms of Service</span> and <span className='span-p'>Policy</span></p>
                                    <button type='submit' className='submmit-btn'>Agree and Continue</button>
                                </div>
                            </form>               
                        </div>
                    }
                </Col>
            </Row>
        </Col>
    )
}

export default Login