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
        <main style={{width:'100vw', height:'90vh'}} className='main-bg-con'>
            <Container fluid style={{width:'88vw',height:'80%', paddingTop:'3%'}}>
              <Row className='row-1'>       
                <HomeContent /> 
              <Login />
              <div className='d-md-none'>
                <HomeHorizontalImage className='d-md-none'/>
              </div>      
              </Row>
            </Container>
        </main>
    );
}
export default HomePage;