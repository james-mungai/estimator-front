import React from 'react';
import './App.scss';
import Form from './components/form/form.component'
import MaterialForm from './components/material-form/material-form';

function App() {
  return (
    <div className="App" >
      <MaterialForm/>
      <Form className='form' />
    </div>
  );
}

export default App;
