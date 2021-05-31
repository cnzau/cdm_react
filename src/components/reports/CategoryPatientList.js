import React, { useContext, useEffect } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useLocation } from 'react-router';
import ReportContext from '../../context/report/reportContext';
import CategoryPatientListItem from './CategoryPatientListItem';
import { Link } from 'react-router-dom';

const CategoryPatientList = ({ match }) => {
  const search = useLocation().search;
  const category = new URLSearchParams(search).get('category');
  const l_id = new URLSearchParams(search).get('l_id');
  const month = new URLSearchParams(search).get('month');

  const reportContext = useContext(ReportContext);

  const { loading, categoryPatientList, getCategoryPatientList } =
    reportContext;

  const noData = () => (
    <tr>
      <th>-</th>
      <th>-</th>
      <th>-</th>
      <th>-</th>
      <th>-</th>
      <th>-</th>
      <th>-</th>
    </tr>
  );

  const genCategories = (ctg) => {
    if (ctg === 'ndp') return 'New Diabetic Patients';
    if (ctg === 'kdp') return 'New Diabetic Patients';
    if (ctg === 'nhp') return 'New Hypetensive Patients';
    if (ctg === 'khp') return 'Known Hypetensive Patients';
    if (ctg === 'hdp') return 'Hypetensive & Diabetic Patients';
  };

  useEffect(() => {
    getCategoryPatientList(category, l_id, month);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Link to='/reports' className='btn btn-light'>
        &#8249; Back To Reports
      </Link>
      <h2 className='text-center'>Report: {genCategories(category)} </h2>
      <div className=' rpt'>
        <Table striped bordered hover size='sm' variant='primary'>
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Encounter Date</th>
              <th>Location</th>
              <th>Hypertension Status</th>
              <th>Diabetes Status</th>
              <th>Gender</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {!loading && !categoryPatientList.length && noData()}
            {categoryPatientList.map((cpList) => {
              return (
                <CategoryPatientListItem key={cpList.id} cpList={cpList} />
              );
            })}
          </tbody>
        </Table>
        {loading && (
          <div className='text-center container'>
            <Spinner animation='border' variant='secondary' />
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryPatientList;
