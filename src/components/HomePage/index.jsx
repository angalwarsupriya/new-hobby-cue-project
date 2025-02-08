import React from 'react';
import './index.css';
// importing  Components to use
import HomeContent from '../HomeContent';
import Login from '../Login';
import HomeHorizontalImage from '../HomeHorizontalImage';

// importing Bootstrap Components 
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function HomePage() {
    return (
        <main style={{width:'100vw', height:'100vh'}} className='main-bg-con'>
            <Container fluid >
              <Row className='row-1'>       
                <HomeContent /> 
                <Login />
                <HomeHorizontalImage/>
              </Row>
            </Container>
        </main>
    );
}
export default HomePage;