import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <div className='main'>
      <Container className='text-center'>
        <h2 className='mb-4 pt-4'>Page Not Found</h2>
        <p className='lead'>
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
        </p>
        <Button className='my-5' as={Link} to='/' variant='link'>
          Go to Home page
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
