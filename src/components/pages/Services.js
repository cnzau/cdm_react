import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | PMchome Logistics</title>
        <link rel='canonical' href='https://pmchomelogistics.com/services' />
      </Helmet>
      <div className='main'>
        <Container>
          <h2 className='text-center mb-4  pt-4'>Our Services</h2>
          <p className='text-center'>
            We offer a fully integrated services with a committed and equipped
            task team, capable of meeting every related need.
          </p>
          <Row className='justify-content-around'>
            <div className='col-sm-12 col-md-4 my-3'>
              <div className='service-item shadow-sm'>
                <h5>Contract Logistics</h5>
                <p>
                  We tailor a solution around your process, using our expertise
                  & network.
                </p>
              </div>
            </div>
            <div className='col-sm-12 col-md-4 my-3'>
              <div className='service-item shadow-sm'>
                <h5>Freight Forwarding</h5>
                <ul>
                  <li>Custom clearance of all kinds of cargo</li>
                  <li>Export / Import documentation preparations</li>
                  <li>Booking and shipping of cargo to and from local port</li>
                </ul>
              </div>
            </div>
            <div className='col-sm-12 col-md-4 my-3'>
              <div className='service-item shadow-sm'>
                <h5>Ship Agency</h5>
                <ul>
                  <li>Documentation</li>
                  <li>Shipment bookings</li>
                  <li>Handling shipments to worldwide destinations</li>
                </ul>
              </div>
            </div>
            <div className='col-sm-12 col-md-4 my-3'>
              <div className='service-item shadow-sm'>
                <h5>Warehousing</h5>
                <ul>
                  <li>Duty paying</li>
                  <li>Facilitated on request and at competitive rates</li>
                </ul>
              </div>
            </div>
            <div className='col-sm-12 col-md-4 my-3'>
              <div className='service-item shadow-sm'>
                <h5>Representative Agents</h5>
                <ul>
                  <li>We work with international partners.</li>
                  <li>We have local / regional (EAC) associate officers</li>
                </ul>
              </div>
            </div>
            <div className='col-sm-12 col-md-4 my-3'>
              <div className='service-item shadow-sm'>
                <h5>Consulting and other services</h5>
                <ul>
                  <li>Transport logistics</li>
                  <li>Market sourcing</li>
                  <li>Advisory services</li>
                  <li>Supply chain consultancy</li>
                </ul>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
