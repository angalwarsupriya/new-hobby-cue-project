import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';
import { HiUserGroup } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { BsBagCheckFill } from "react-icons/bs";
import { BsCalendarCheck } from "react-icons/bs";

const cards_details_list = [
    {
    id:1,
    title: 'People',
    description: 'Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.',
    logo: <HiUserGroup className='icon1 icon' />,
    btnCon: 'Connect',
    color: '#8064A2'
  },
    {
    id:2,
    title: 'Place',
    description: 'Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.',
    logo: <FaLocationDot className='icon2 icon' />,
    btnCon: 'Meet up',
    color: '#77933C'
  },
    {
    id:3,
    title: 'Product',
    description: 'Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.',
    logo: <BsBagCheckFill className='icon3 icon' />,
    btnCon: 'Get it',
    color: '#C0504D'
  },
    {
    id:4,
    title: 'Program',
    description: 'Find events, meetups and workshops related to your hobby.  Register or buy tickets online.',
    logo: <BsCalendarCheck className='icon4 icon' />,
    btnCon: 'Attend',
    color: '#0096C8'
  },
];

function Cards() {
  return (
    <Container fluid className='cards-bg-con'>
      <Row className='d-flex justify-content-center '>
        {cards_details_list.map((card, index) => (
        <Col key={index} xs={12} md={5} className={`card-con card-con${card.id}`} style={{ borderColor: card.color }}>
            <Row className='top-row d-flex align-items-center'>
              <Col xs='auto'>{card.logo}</Col>
              <Col>
                <h4 className='title'>{card.title}</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className='card-p'>{card.description}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <button className='card-btn'>{card.btnCon}</button>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;
