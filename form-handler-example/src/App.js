import React from 'react';
import './App.css';
import BadForm from './BadForm';
import GoodForm from './GoodForm';
import FormikForm from './FormikForm';

function App() {
  return (
    <div className="App">
      <BadForm />
      <GoodForm />
      <FormikForm />
    </div>
  );
}

export default App;
