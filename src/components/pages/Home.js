import React, { useContext } from 'react';
import PatientContext from '../../context/patient/patientContext';
import Patients from '../patients/Patients';
import Search from '../patients/Search';

const Home = (props) => {
  const patientContext = useContext(PatientContext);
  return (
    <>
      <div
        className={!patientContext.patients.length ? 'home-default' : undefined}
      >
        {!patientContext.patients.length && (
          <h3 className='text-muted text-center mb-5'>
            CDM - Hypertensive & Diabetic
          </h3>
        )}
        <Search />
      </div>
      <Patients />
    </>
  );
};

export default Home;
