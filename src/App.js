import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/layouts/Navigation';
import Home from './components/pages/Home';
import Patients from './components/pages/Patients';
import Reports from './components/pages/Reports';
import NotFound from './components/pages/NotFound';
import Footer from './components/layouts/Footer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Switch>
        <Route exact strict path='/'>
          <Redirect to='/home' />
        </Route>
        <Route exact strict path='/home' component={Home} />
        <Route exact strict path='/patients' component={Patients} />
        <Route exact strict path='/reports' component={Reports} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
