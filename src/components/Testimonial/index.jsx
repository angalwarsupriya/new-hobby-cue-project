import React from 'react';
import './index.css';
//importing Bottstrap Components for make responsive 
import { Container, Row, Col } from 'react-bootstrap';

// importing react-icons
import { FaQuoteLeft } from "react-icons/fa6";

// starting Testimonial Component
function Testimonial() {
    return (
      <section className='section-con mt-5'>
        <Container fluid className='testimonail-bg-con'>       
          <Row className='testimonail-card'>
            <Col xs={12}  className='top-row d-flex align-items-center'>
              <div className='quote-round'>
                <FaQuoteLeft className='quote-icon' />
              </div>
              <h4 className='title'>Testimonial</h4>
            </Col>

            <Col xs={12}>
              <p  className='testimonail-card-p'>
              In a fast growing and ever changing city like Bangalore,
              it sometimes becomes very difficult to find or connect with like minded people.
              Websites like hobbycue.com is a great service which helps me get in touch with,
              communicate, connect, and exchange ideas with other dancers. It also provides the
              extra benefit of finding products and services that I can avail, which I can be assured
              is going to be of great quality as it comes recommended by people of the hobbycue community.
              To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city,
                all under one roof, is an excellent idea and I highly recommend it.
              </p>
            </Col>
            <Col xs={12} className='card-bottom-con'>
              <Row className='mt-5'>
                <Col xs={12} lg={7} className='order-2 order-lg-1 audio-img-con'>
                  <img src='/images/Audio Track.png' alt='audio-img' className='audio-img' />
                </Col>  
                <Col xs={12} lg={3} className='face-img-con d-flex justify-content-center align-items-center order-1 order-lg-2'>
                  <img src='/images/Ellipse 12.png' alt='audio-face-img' className='audio-face-img' />
                  <div className='d-flex flex-column justify-content-center align-items-center mt-1'>
                    <h6>Shubha Nagarajan</h6>
                    <p className='type-p'>Classical Deancer</p>
                  </div>
                </Col>
              </Row>
            </Col>

          </Row>
        </Container>
      </section>
  );
}

export default Testimonial;