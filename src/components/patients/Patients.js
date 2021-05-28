import React, { useContext } from 'react';
import PatientItem from './PatientItem';
import PatientContext from '../../context/patient/patientContext';
import { Spinner } from 'react-bootstrap';

const Patients = () => {
  const patientContext = useContext(PatientContext);

  const { loading, patients } = patientContext;

  if (loading) {
    return (
      <div className='text-center'>
        <Spinner animation='border' variant='secondary' />
      </div>
    );
  } else {
    return (
      <div className='patients' style={patientStyle}>
        {patients.map((patient) => {
          return <PatientItem key={patient.id} patient={patient} />;
        })}
      </div>
    );
  }
};

const patientStyle = {};

export default Patients;
