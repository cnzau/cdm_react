import React from 'react';
import PropTypes from 'prop-types';

const ReportItem = ({
  report: {
    id,
    month,
    location,
    new_hypertensive,
    known_hypertensive,
    new_diabetic,
    known_diabetic,
    hypertensive_and_diabetic,
  },
}) => {
  return (
    <tr>
      <td>{month ? month : '-'}</td>
      <td>{location ? location : '-'}</td>
      <td>
        {new_hypertensive ? (
          <a href={`/reports/patients?category=nhp&l_id=${id}&month=${month}`}>
            {' '}
            {new_hypertensive}
          </a>
        ) : (
          '-'
        )}
      </td>
      <td>
        {known_hypertensive ? (
          <a href={`/reports/patients?category=khp&l_id=${id}&month=${month}`}>
            {' '}
            {known_hypertensive}
          </a>
        ) : (
          '-'
        )}
      </td>
      <td>
        {new_diabetic ? (
          <a href={`/reports/patients?category=ndp&l_id=${id}&month=${month}`}>
            {' '}
            {new_diabetic}
          </a>
        ) : (
          '-'
        )}
      </td>
      <td>
        {known_diabetic ? (
          <a href={`/reports/patients?category=kdp&l_id=${id}&month=${month}`}>
            {' '}
            {known_diabetic}
          </a>
        ) : (
          '-'
        )}
      </td>
      <td>
        {hypertensive_and_diabetic ? (
          <a href={`/reports/patients?category=hdp&l_id=${id}&month=${month}`}>
            {' '}
            {hypertensive_and_diabetic}
          </a>
        ) : (
          '-'
        )}
      </td>
    </tr>
  );
};

ReportItem.propTypes = {
  report: PropTypes.object.isRequired,
};

export default ReportItem;
