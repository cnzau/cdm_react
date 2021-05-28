import React from 'react';
import PropTypes from 'prop-types';

const PatientReportItem = ({
  pReport: { encounter_date, location, hypertension_status, diabetic_status },
}) => {
  return (
    <tr>
      <td>{encounter_date ? encounter_date : '--'}</td>
      <td>{location ? location : '--'}</td>
      <td>{hypertension_status ? hypertension_status : '--'}</td>
      <td>{diabetic_status ? diabetic_status : '--'}</td>
    </tr>
  );
};

PatientReportItem.propTypes = {
  pReport: PropTypes.object.isRequired,
};

export default PatientReportItem;
