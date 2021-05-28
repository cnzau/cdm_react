import React, { useState, useContext } from 'react';
import PatientContext from '../../context/patient/patientContext';
import AlertContext from '../../context/alert/alertContext';

import { SearchIco } from '../../images';
import { Form, InputGroup, Button, FormControl } from 'react-bootstrap';
// import { useHistory } from 'react-router';

const Search = () => {
  const patientContext = useContext(PatientContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  // let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'danger');
    } else {
      // history.push(`/patients?${text}`);
      patientContext.searchPatients(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div
      className={
        !patientContext.patients.length ? 'p-search unsearched' : 'searched'
      }
    >
      <Form onSubmit={onSubmit}>
        <InputGroup
          size={patientContext.patients.length > 0 ? 'sm' : 'lg'}
          id='inputGroup-search'
          className='mb-3'
        >
          <FormControl
            aria-label='Search'
            aria-describedby='inputGroup-search'
            placeholder='Search Patients...'
            type='text'
            name='text'
            value={text}
            onChange={onChange}
          />
          <InputGroup.Append>
            <InputGroup.Text
              as={Button}
              type='submit'
              id='inputGroup-sizing-sm'
            >
              <img
                src={SearchIco}
                height='16px'
                width='16px'
                alt=''
                style={{ marginLeft: '1rem', marginRight: '1rem' }}
              />
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      {patientContext.patients.length > 0 && (
        <Button
          onClick={patientContext.clearPatients}
          variant='secondary'
          size='sm'
        >
          Clear
        </Button>
      )}
    </div>
  );
};

export default Search;
