import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Home = (props) => {
  return (
    <Container className='main'>
      <Jumbotron className='text-center jumbo'>
        <p>
          Hello,
          <br />
          Welcome to the Chronic Disease Management System
        </p>
      </Jumbotron>
    </Container>
  );
};

export default Home;
