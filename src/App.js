import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Navigation from './components/layouts/Navigation';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Footer from './components/layouts/Footer';
import Alert from './components/layouts/Alert';

import PatientState from './context/patient/PatientState';
import AlertState from './context/alert/AlertState';

import { Container } from 'react-bootstrap';
import './App.css';
import Patient from './components/patients/Patient';
import CategoryPatientList from './components/reports/CategoryPatientList';
import Reports from './components/reports/Reports';
import ReportState from './context/report/ReportState';

function App() {
  return (
    <PatientState>
      <ReportState>
        <AlertState>
          <div className='App'>
            <Navigation />
            <Container className='main'>
              <Alert />
              <Switch>
                <Route exact path='/'>
                  <Redirect to='/home' />
                </Route>
                <Route exact path='/home' component={Home} />
                <Route strict path='/patients/:id' component={Patient} />
                <Route exact path='/reports' component={Reports} />
                <Route
                  strict
                  path='/reports/:category'
                  component={CategoryPatientList}
                />
                <Route component={NotFound} />
              </Switch>
            </Container>
            <Footer />
          </div>
        </AlertState>
      </ReportState>
    </PatientState>
  );
}

export default App;
