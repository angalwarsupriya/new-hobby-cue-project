import React, { useState } from 'react';
import './index.css';

// importingreact-icons
import { Row, Col } from 'react-bootstrap';
import SignInCompo from '../LoginComponents/SignInCompo';
import JoinInCompo from '../LoginComponents/JoinInCompo';

function Login() {
    // state between sign in and join 
    const [loginStatus, changeLoginStatus] = useState('SIGN_IN');
    const [passwordVisible, setPasswordVisible] = useState(false);
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  
    return (
        <Col xs={12} md={4} className='login-bg-con' >     
            <Row style={{ width: '100%'}} className='d-flex align-items-start'>

                <Col xs={12}>
                   <div className='sign-in-login-con d-flex mt-5 mt-md-0'>
                        <button onClick={() => changeLoginStatus('SIGN_IN')} style={{ backgroundColor: 'transparent', border: 'none', color: loginStatus === "SIGN_IN" ? ' #8064A2' : '#a69ab5' }}>
                            Sign In
                        </button>
                        <button onClick={()=> changeLoginStatus('JOIN_IN')}  style={{backgroundColor:'transparent', border:'none',color:loginStatus==="JOIN_IN" ? ' #8064A2' : '#a69ab5'}}>
                            Join In
                        </button>
                    </div>
                </Col>

                <Col xs={12} md={12} className='login-con'>
                    {
                        loginStatus === 'SIGN_IN' ?
                            <SignInCompo  /> :
                            <JoinInCompo />
                    }
                </Col>
            </Row>
        </Col>
    )
}

export default Login

