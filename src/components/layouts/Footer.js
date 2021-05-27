import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='container-fluid text-light bg-dark py-4'>
      <Container>
        <small>
          <Row className='my-4'>
            <Col className='text-center'>
              &copy; <span id='yr'>2021</span>
            </Col>
          </Row>
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
