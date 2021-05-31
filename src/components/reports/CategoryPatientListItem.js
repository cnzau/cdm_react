import React from 'react';
import PropTypes from 'prop-types';

const CategoryPatientListItem = ({
  cpList: {
    name,
    encounter_date,
    location,
    hypertension_status,
    diabetes_status,
    gender,
    age,
  },
}) => {
  return (
    <tr>
      <td>{name ? name : '--'}</td>
      <td>{encounter_date ? encounter_date : '--'}</td>
      <td>{location ? location : '--'}</td>
      <td>{hypertension_status ? hypertension_status : '--'}</td>
      <td>{diabetes_status ? diabetes_status : '--'}</td>
      <td>{gender ? gender : '--'}</td>
      <td>{age ? age : '--'}</td>
    </tr>
  );
};

CategoryPatientListItem.propTypes = {
  cpList: PropTypes.object.isRequired,
};

export default CategoryPatientListItem;
