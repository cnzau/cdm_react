import React from 'react';
import PropTypes from 'prop-types';
import { Fml, Ml } from '../../images';
import { Col, Row } from 'react-bootstrap';

const PatientItem = ({ patient: { id, name, gender, age } }) => {
  const imgDet = (g) => {
    if (g === 'M') return Ml;
    if (g === 'F') return Fml;
  };
  return (
    <a href={`/patients/${id}`} className='card container'>
      <Row>
        <Col xs={4} sm={4} md={4} style={{ display: 'grid' }}>
          <img
            src={imgDet(gender)}
            alt=''
            className='round-img'
            style={{ width: '40px', height: '40px' }}
          />
        </Col>
        <Col xs={8} sm={8} md={8}>
          <Row>
            <Col>
              <h5 className='text-center'>{name}</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6 className='text-center'>{age}</h6>
            </Col>
          </Row>
        </Col>
      </Row>
    </a>
  );
};

PatientItem.propTypes = {
  patient: PropTypes.object.isRequired,
};

export default PatientItem;
