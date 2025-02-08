import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCirclePlus } from "react-icons/fa6";
import './index.css';
import Button from 'react-bootstrap/Button';

function AddOwnCard() {
  return (
    <Container fluid className='add-own-card-bg-con mt-5'>
      <Row className='add-own-card-con'>
        <Col xs={12} md={12}>
          <div className='top-row d-flex align-items-center'>
            <FaCirclePlus className='icon' style={{ color: "#0096C8" }} />
            <h4 className='title'>Place</h4>
          </div>
          <p className='card-p'>Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page.</p>
          <button className='add-card-btn mt-4'>Add New</button>
        </Col>
      </Row>
    </Container>
  );
}

export default AddOwnCard;
