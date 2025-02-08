import React from 'react';
import {  Row, Col } from 'react-bootstrap';
import './index.css';
import HomeHorizontalImage from '../HomeHorizontalImage';

function HomeContent() {
  return (
    <Col xs={12} md={8}>
        <Row>
          <Col xs={12}>
          <div className='d-flex flex-column content-con'>
            <h1 className='home-page-main-hea'>
              Explore your <span className='hobby-h'>hobby</span> or <span className='passion-h'>passion</span>
            </h1>
            <p className='para'>
               Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
            </p>
            <p className='para pt-3'>
               If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
            </p>
          </div>
        </Col>
        <div className='d-none d-md-flex'>
          <HomeHorizontalImage />
        </div>        
        </Row>        
        </Col>
  );
}

export default HomeContent;
