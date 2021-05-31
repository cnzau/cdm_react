import React, { useReducer } from 'react';
import Axios from 'axios';
import ReportContext from './reportContext';
import ReportReducer from './reportReducer';
import { SET_LOADING, GET_REPORTS, GET_CATEGORY_PATIENT_LIST } from '../types';

const ReportState = (props) => {
  const initialState = {
    reports: [],
    categoryPatientList: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(ReportReducer, initialState);

  // Get Reports
  const getReports = async () => {
    setLoading();
    const res = await Axios.get(`https://cdm-api.clementnzau.com/reports`)
      .then((getResponse) => {
        return getResponse.data;
      })
      .catch(function (error) {
        console.log('Error while fetching reports');
      });
    dispatch({
      type: GET_REPORTS,
      payload: res.data,
    });
  };

  // Get Category Patient List
  const getCategoryPatientList = async (category, id, month) => {
    setLoading();
    const res = await Axios.get(
      `https://cdm-api.clementnzau.com/reports/patients?category=${category}&l_id=${id}&month=${month}`
    )
      .then((getResponse) => {
        return getResponse.data;
      })
      .catch(function (error) {
        console.log('Error while fetching Patients');
      });
    dispatch({
      type: GET_CATEGORY_PATIENT_LIST,
      payload: res.data,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ReportContext.Provider
      value={{
        reports: state.reports,
        categoryPatientList: state.categoryPatientList,
        loading: state.loading,
        getReports,
        getCategoryPatientList,
      }}
    >
      {props.children}
    </ReportContext.Provider>
  );
};

export default ReportState;
