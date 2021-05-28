import {
  SEARCH_PATIENTS,
  SET_LOADING,
  CLEAR_PATIENTS,
  GET_PATIENT,
  GET_PATIENT_REPORTS,
} from '../types';

const patientReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_PATIENTS:
      return { ...state, patients: action.payload, loading: false };
    case GET_PATIENT:
      return { ...state, patient: action.payload, loading: false };
    case CLEAR_PATIENTS:
      return {
        ...state,
        patients: [],
        loading: false,
      };
    case GET_PATIENT_REPORTS:
      return { ...state, patientReports: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default patientReducer;
