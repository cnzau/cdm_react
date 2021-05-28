import React, { useReducer } from 'react';
import Axios from 'axios';
import PatientContext from './patientContext';
import PatientReducer from './patientReducer';
import {
  SEARCH_PATIENTS,
  SET_LOADING,
  CLEAR_PATIENTS,
  GET_PATIENT,
  GET_PATIENT_REPORTS,
} from '../types';

const PatientState = (props) => {
  const initialState = {
    patients: [],
    patient: {},
    patientReports: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(PatientReducer, initialState);

  // Search Patients
  const searchPatients = async (text) => {
    setLoading();
    const res = await Axios.get(
      `https://cdm-api.clementnzau.com/patients?search_name=${text}`
    )
      .then((getResponse) => {
        return getResponse.data;
      })
      .catch(function (error) {
        console.log('Error while fetching Patients');
      });
    dispatch({
      type: SEARCH_PATIENTS,
      payload: res.data,
    });
  };

  // Get a single Patient
  const getPatient = async (id) => {
    setLoading();
    const res = await Axios.get(
      `https://cdm-api.clementnzau.com/patients/${id}`
    )
      .then((getResponse) => {
        return getResponse.data;
      })
      .catch(function (error) {
        console.log('Error while fetching Patient details');
      });

    dispatch({
      type: GET_PATIENT,
      payload: res,
    });
  };

  // Get Patient Reports
  const getPatientReports = async (id) => {
    setLoading();
    const res = await Axios.get(
      `https://cdm-api.clementnzau.com/patients/${id}/reports`
    )
      .then((getResponse) => {
        return getResponse.data;
      })
      .catch(function (error) {
        console.log('Error while fetching Patient reports');
      });
    dispatch({
      type: GET_PATIENT_REPORTS,
      payload: res.data,
    });
  };

  // Clear Patients from state
  const clearPatients = () => dispatch({ type: CLEAR_PATIENTS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PatientContext.Provider
      value={{
        patients: state.patients,
        patient: state.patient,
        patientReports: state.patientReports,
        loading: state.loading,
        searchPatients,
        clearPatients,
        getPatient,
        getPatientReports,
      }}
    >
      {props.children}
    </PatientContext.Provider>
  );
};

export default PatientState;
