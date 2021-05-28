import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PatientContext from '../../context/patient/patientContext';
import PatientReportItem from './PatientReportItem';
import { Ml, Fml } from '../../images';
import { Spinner, Table, Row, Col, Container } from 'react-bootstrap';

const Patient = ({ match }) => {
  const patientContext = useContext(PatientContext);

  const { getPatient, loading, patient, patientReports, getPatientReports } =
    patientContext;

  useEffect(() => {
    getPatient(match.params.id);
    getPatientReports(match.params.id);
    // eslint-disable-next-line
  }, []);

  const imgDet = (g) => {
    if (g === 'MALE') return Ml;
    if (g === 'FEMALE') return Fml;
  };

  const { name, id, gender, dob, age, contact } = patient;
  if (loading) return <Spinner animation='border' variant='secondary' />;

  return (
    <>
      <Link to='/' className='btn btn-light'>
        &#8249; Back To Search
      </Link>
      <h1 className='text-center'>Patient Details</h1>
      <Container className='card p-details'>
        <Row>
          <Col md={5} className='details-1 text-center'>
            <img
              src={imgDet(gender)}
              alt=''
              className='round-img mt-3'
              style={{ width: '120px', height: '120px' }}
            />
            <h2 className='text-muted mt-3 mb-3'>{name}</h2>
          </Col>
          <Col md={7} className='details-2 '>
            <Row striped variant='' className=''>
              <Col>
                <Row className='b'>
                  <Col>ID:</Col>
                  <Col> {id}</Col>
                </Row>
                <Row>
                  <Col className='item-head'>Contact:</Col>
                  <Col className='item-head'>D.O.B:</Col>
                </Row>
                <Row>
                  <Col> {contact} </Col>
                  <Col> {dob} </Col>
                </Row>
                <Row>
                  <Col className='item-head'>Gender:</Col>
                  <Col className='item-head'>Age:</Col>
                </Row>
                <Row>
                  <Col> {gender} </Col>
                  <Col> {age} </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <h5 className='mt-4'>Patient Reports</h5>
      <div className=' rpt'>
        <Table striped bordered hover variant='primary'>
          <thead>
            <tr>
              <th>Encounter Date</th>
              <th>Location</th>
              <th>Hypertension Status</th>
              <th>Diabetic Status</th>
            </tr>
          </thead>
          <tbody>
            {patientReports.length === 0 && (
              <tr>
                <th>--</th>
                <th>--</th>
                <th>--</th>
                <th>--</th>
              </tr>
            )}
            {patientReports.map((pReport) => {
              return (
                <PatientReportItem
                  key={pReport.encounter_date}
                  pReport={pReport}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Patient;
