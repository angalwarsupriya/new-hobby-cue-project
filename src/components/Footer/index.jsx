import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';

import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { MdOutlineCopyright } from "react-icons/md";

const linksList = [
  {
    footerlinkTitle: 'Hobbycue',
    links: ['About Us', 'Our Services', 'Work with Us', 'FAQs', 'Contact Us']
  },
  {
    footerlinkTitle: 'How DO I',
    links: ['Sign Up', 'Add a Listing', 'Claim Listing', 'Post a Query', 'Add a Blog Post', 'Other Queries']
  },
  {
    footerlinkTitle: 'Quick Links',
    links: ['Listings', 'Blog Posts', 'Shop / Store', 'Community']
  }
];

function Footer() {
  return (
    <footer className='footer-bg-con'>
        <Container fluid className='d-flex flex-column align-items-center' >  
        <Row className='ps-3' style={{width:'88vw' }}>
          {linksList.map((eachDetails, index) => (
            <Col key={index} xs={6} md={3} className='info-con'>
              <h6 className='footer-link-title'>{eachDetails.footerlinkTitle}</h6>
              {eachDetails.links.map((eachLink, linkIndex) => (
                <a key={linkIndex} className='link d-block'>{eachLink}</a>
              ))}
            </Col>
          ))}

          <Col xs={12} md={3} className='contact-con'>
            <h6 className='footer-link-title'>Social Media</h6>
            <div className='social-media-icons-row d-flex'>
              {[
                <TfiFacebook />,
                <FaTwitter />,
                <AiFillInstagram />,
                <AiOutlineGooglePlus />,
                <FaYoutube />,
                <IoIosPaperPlane />,
                <IoMail />
              ].map((icon, iconIndex) => (
                <div key={iconIndex} className='icon-con d-flex align-items-center justify-content-center'>
                  {icon}
                </div>
              ))}
            </div>

            <div className='invite-friends-con'>
              <h6 className='footer-link-title'>Invite Friend</h6>
              <div className='search-bar-con'>
                <input type='search' className='search-bar' placeholder='Email ID' />
                <button className='footer-search-icon-con'>Invite</button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className='c-row mt-4'>
          <Col className='c-con d-flex justify-content-center align-items-center'>
            <div className='d-flex align-items-center'>
              <MdOutlineCopyright className='c-icon' />
              <p className='c'>Purple Cues Private Limited</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
