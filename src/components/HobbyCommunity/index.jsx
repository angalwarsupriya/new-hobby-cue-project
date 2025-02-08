import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';

function HobbyCommunity() {
  return (
    <Container fluid className='bg-con d-flex justify-content-center align-items-center'>
      <Row className='' style={{width:"88vw"}} >
        <Col xs={12} >
          <div className='hea-btn-con'>
            <h1 className='main-hea'>
              Your <span className='main-span-hobby'>Hobby</span>, Your <span className='main-span-community'>Community...</span>
            </h1>
            <button className='get-start-btn'>Get Started</button>
          </div>
        </Col>
        <Col xs={12} className='main-img-con text-center'>
          <img src='/images/Group 99.png' className='main-img-img' alt='group of people img' />
        </Col>
      </Row>
    </Container>
  );
}

export default HobbyCommunity;
