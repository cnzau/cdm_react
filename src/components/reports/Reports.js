import React, { useContext, useEffect } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import ReportContext from '../../context/report/reportContext';
import ReportItem from './ReportItem';

const Reports = () => {
  const reportContext = useContext(ReportContext);

  //   const { getPatient, loading, patient, patientReports, getPatientReports } =
  //     patientContext;

  const { loading, reports, getReports } = reportContext;
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

  useEffect(() => {
    getReports();
    // getPatientReports(match.params.id);
    // eslint-disable-next-line
  }, []);

  //   if (loading) {
  //     return (
  //       <div className='text-center'>
  //         <Spinner animation='border' variant='secondary' />
  //       </div>
  //     );
  //   } else {
  return (
    <>
      <h1 className='text-center'>Reports</h1>
      <div className=' rpt'>
        <Table striped bordered hover size='sm' variant='primary'>
          <thead>
            <tr>
              <th>Month</th>
              <th>Location</th>
              <th>New Hypertensive</th>
              <th>Known Hypertensive</th>
              <th>New Diabetic</th>
              <th>Known Diabetic</th>
              <th>Hypertensive and Diabetic</th>
            </tr>
          </thead>
          <tbody>
            {!loading && !reports.length && noData()}
            {reports.map((report) => {
              return <ReportItem key={report.id} report={report} />;
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
  //   }
};

export default Reports;
