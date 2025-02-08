import React from 'react';
import './index.css';

// importing Bootstrap Components 
import { Container, Row, Col } from 'react-bootstrap';

function HomeHorizontalImage() {
    return (
        <Col xs={12} className='mt-5'>
            <img src='/images/Group 27.png' alt='group of people' className='img'/>
        </Col>
    )
}

export default HomeHorizontalImage;