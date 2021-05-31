import { SET_LOADING, GET_REPORTS, GET_CATEGORY_PATIENT_LIST } from '../types';

const reportReducer = (state, action) => {
  switch (action.type) {
    case GET_REPORTS:
      return { ...state, reports: action.payload, loading: false };
    case GET_CATEGORY_PATIENT_LIST:
      return { ...state, categoryPatientList: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default reportReducer;
