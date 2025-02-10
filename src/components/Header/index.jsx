import React from 'react'
import './index.css'
// importing Bootstrap Components 
import { Container, Row, Col } from 'react-bootstrap';

// importin icons from React-icons
import { IoIosSearch } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaBell } from "react-icons/fa"
import { FaBookmark } from "react-icons/fa6";
import DropdownCompo from '../../DropdownCompo/DropdownCompo';

const exploreList = [{id:1, item:'People - Community'}, {id:2, item:'Places - Venues'}, {id:3, item:'Programs - Events'}, {id:4, item:'Products - Store'}, {id:5, item:'Blogs'}]
const hobbiesList = [{id:1, item:'Playing'}, {id:2, item:'Singing'}, {id:3, item:'Reading Books'}, {id:4, item:'Watching Tv'}, {id:5, item:'Plan for a Trip'}]
// starting writing Header Components

function Header() {
  return (
    <header className='header-bg-con d-flex align-items-center pt-3 pb-3' >
      <Container fluid style={{width:'88vw'}}>
        <Row className='align-items-center header-row'>
          <Col xs={5} md={2}>
            <img src='/images/HobbyCue Logo.png' className='logo-img' alt="HobbyCue Logo"/>
          </Col>
          <Col xs={7} className='d-md-none i-con d-flex justify-content-end'>
            <IoIosSearch className='i'/>
            <FaBell className='i'/>
            <MdMenu className='i'/>
          </Col>
          <Col md={4} lg={4} className='con2 d-none d-md-flex'>
            <div className='search-bar-con'>
              <input type='search' className='search-bar' placeholder="Search..."/>
              <div className='search-icon-con d-flex justify-content-center align-items-center'>
                <IoIosSearch style={{color:"#fff", fontSize:'16px'}}/>
              </div>
            </div>
          </Col>
          <Col md={6} lg={5} className='con3 d-none d-md-flex justify-content-between'>
            <Row className='d-flex align-items-center justify-content-between'>
              <Col className='d-flex align-items-center justify-content-between' md={6} >
                <div className='explore-con d-flex align-items-center'>
                  <img src='/images/Group.png' className='link-img' alt="Explore"/>
                  <p className='link-p'>Explore</p>
                  <DropdownCompo itemsList={exploreList} />
                </div>
                <div className='d-flex align-items-center justify-content-center'> 
                  <img src='/images/Hobbies.png' className='link-img' alt="Hobbies"/>
                  <p className='link-p'>Hobbies</p>
                  <DropdownCompo itemsList={hobbiesList} />
                </div>
              </Col>
              <Col className='d-flex align-items-center justify-content-end' md={3}>
                <FaBookmark className='link-i1'/>
                <FaBell className='link-i2'/>
                <PiShoppingCartSimpleFill className='link-i3'/>
              </Col>
              <Col md={2}>
                <button className='sign-in-btn m-0'>Sign In</button>
              </Col>
          </Row>        
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;